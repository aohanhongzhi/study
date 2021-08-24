# [Spring中的循环依赖解决详解](https://www.cnblogs.com/zzq6032010/p/11406405.html)

**前言**

​    说起Spring中循环依赖的解决办法，相信很多园友们都或多或少的知道一些，但当真的要详细说明的时候，可能又没法一下将它讲清楚。本文就试着尽自己所能，对此做出一个较详细的解读。另，需注意一点，下文中会出现类的实例化跟类的初始化两个短语，为怕园友迷惑，事先声明一下，本文的实例化是指刚执行完构造器将一个对象new出来，但还未填充属性值的状态，而初始化是指完成了属性的依赖注入。

**一、先说说Spring解决的循环依赖是什么**

​    Java中的循环依赖分两种，一种是构造器的循环依赖，另一种是属性的循环依赖。

​    **构造器的循环依赖就是在构造器中有属性循环依赖**，如下所示的两个类就属于构造器循环依赖：

```
@Service
public class Student {
    @Autowired
    private Teacher teacher;

    public Student (Teacher teacher) {
        System.out.println("Student init1:" + teacher);
    }

    public void learn () {
        System.out.println("Student learn");
    }
}
```

```
@Service
public class Teacher {
    @Autowired
    private Student student;

    public Teacher (Student student) {
        System.out.println("Teacher init1:" + student);

    }

    public void teach () {
        System.out.println("teach:");
        student.learn();
    }
}
```

​    这种循环依赖没有什么解决办法，因为JVM虚拟机在对类进行实例化的时候，需先实例化构造器的参数，而由于循环引用这个参数无法提前实例化，故只能抛出错误。

​    **Spring解决的循环依赖就是指属性的循环依赖**，如下所示：

```
 @Service
public class Teacher {
    @Autowired
    private Student student;

    public Teacher () {
        System.out.println("Teacher init1:" + student);

    }

    public void teach () {
        System.out.println("teach:");
        student.learn();
    }

}
```

```
 @Service
public class Teacher {
    @Autowired
    private Student student;

    public Teacher () {
        System.out.println("Teacher init1:" + student);

    }

    public void teach () {
        System.out.println("teach:");
        student.learn();
    }

}
```

测试扫描类：

```
 @ComponentScan(value = "myPackage")
 public class ScanConfig {
     
 }
```

测试启动类：

```
public class SpringTest {

    public static void main(String[] args) {
        AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(ScanConfig.class);
        applicationContext.getBean(Teacher.class).teach();

    }
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

测试类执行结果：

```
 Student init:null
 Teacher init:null
 teach:
 Student learn
```

​    可以看到，在构造器执行的时候未完成属性的注入，而在调用方法的时候已经完成了注入。下面就一起看看Spring内部是在何时完成的属性注入，又是如何解决的循环依赖。

#### 二、循环依赖与属性注入

**1、对于非懒加载的类，是在refresh方法中的 finishBeanFactoryInitialization(beanFactory) 方法完成的包扫描以及bean的初始化**，下面就一起追踪下去。

```
 protected void finishBeanFactoryInitialization(ConfigurableListableBeanFactory beanFactory) {
         // 其他代码
 
         // Instantiate all remaining (non-lazy-init) singletons.
         beanFactory.preInstantiateSingletons();
     }
```

可以看到调用了beanFactory的一个方法，此处的beanFactory就是指我们最常见的那个DefaultListableBeanFactory，下面看它里面的这个方法。

**2、DefaultListableBeanFactory的preInstantiateSingletons方法**

```
public void preInstantiateSingletons() throws BeansException {

        List<String> beanNames = new ArrayList<>(this.beanDefinitionNames);

        // Trigger initialization of all non-lazy singleton beans...
        for (String beanName : beanNames) {
            RootBeanDefinition bd = getMergedLocalBeanDefinition(beanName);
            if (!bd.isAbstract() && bd.isSingleton() && !bd.isLazyInit()) { // 判断为非抽象类、是单例、非懒加载 才给初始化
                if (isFactoryBean(beanName)) {
                    // 无关代码（针对FactoryBean的处理）
                }
                else {
                    // 重要！！！普通bean就是在这里初始化的
                    getBean(beanName);
                }
            }
        }

        // 其他无关代码
    }
```

可以看到，就是在此方法中循环Spring容器中所有的bean，依次对其进行初始化，初始化的入口就是getBean方法

**3、AbstractBeanFactory的getBean跟doGetBean方法**

追踪getBean方法：

```
 public Object getBean(String name) throws BeansException {
         return doGetBean(name, null, null, false);
     }
```

可见引用了重载的doGetBean方法，继续追踪之：

```
protected <T> T doGetBean(final String name, @Nullable final Class<T> requiredType,
            @Nullable final Object[] args, boolean typeCheckOnly) throws BeansException {

        final String beanName = transformedBeanName(name);
        Object bean;

         // 方法1）从三个map中获取单例类
        Object sharedInstance = getSingleton(beanName);
        // 省略无关代码
        }
        else {
            // 如果是多例的循环引用，则直接报错
            if (isPrototypeCurrentlyInCreation(beanName)) {
                throw new BeanCurrentlyInCreationException(beanName);
            }
            // 省略若干无关代码
            try {
                // Create bean instance.
                if (mbd.isSingleton()) {
                    // 方法2) 获取单例对象
                    sharedInstance = getSingleton(beanName, () -> {
                        try { //方法3) 创建ObjectFactory中getObject方法的返回值
                            return createBean(beanName, mbd, args);
                        }
                        catch (BeansException ex) {
                            // Explicitly remove instance from singleton cache: It might have been put there
                            // eagerly by the creation process, to allow for circular reference resolution.
                            // Also remove any beans that received a temporary reference to the bean.
                            destroySingleton(beanName);
                            throw ex;
                        }
                    });
                    bean = getObjectForBeanInstance(sharedInstance, name, beanName, mbd);
                }
         }
        // 省略若干无关代码
        return (T) bean;
    }
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

该方法比较长，对于解决循环引用来说，上面标出来的3个方法起到了至关重要的作用，下面我们挨个攻克。

**3.1） getSingleton(beanName)方法**： **注意该方法跟方法2）是重载方法，名字一样内部逻辑却大相径庭。**

```
protected Object getSingleton(String beanName, boolean allowEarlyReference) {
        Object singletonObject = this.singletonObjects.get(beanName);// 步骤A
        if (singletonObject == null && isSingletonCurrentlyInCreation(beanName)) {
            synchronized (this.singletonObjects) {
                singletonObject = this.earlySingletonObjects.get(beanName);// 步骤B
                if (singletonObject == null && allowEarlyReference) {
                    ObjectFactory<?> singletonFactory = this.singletonFactories.get(beanName);// 步骤C
                    if (singletonFactory != null) {
                        singletonObject = singletonFactory.getObject();
                        this.earlySingletonObjects.put(beanName, singletonObject);
                        this.singletonFactories.remove(beanName);
                    }
                }
            }
        }
        return singletonObject;
    }
```

​    通过上面的步骤可以看出这三个map的优先级。其中singletonObjects里面存放的是初始化之后的单例对象；earlySingletonObjects中存放的是一个已完成实例化未完成初始化的早期单例对象；而singletonFactories中存放的是ObjectFactory对象，此对象的getObject方法返回值即刚完成实例化还未开始初始化的单例对象。**所以先后顺序是，单例对象先存在于singletonFactories中，后存在于earlySingletonObjects中，最后初始化完成后放入singletonObjects中**。

​    当debug到此处时，以上述Teacher和Student两个循环引用的类为例，如果第一个走到这一步的是Teacher，则从此处这三个map中get到的值都是空，因为还未添加进去。这个方法主要是给循环依赖中后来过来的对象用。

**3.2）getSingleton(String beanName, ObjectFactory singletonFactory)方法**：

```
public Object getSingleton(String beanName, ObjectFactory<?> singletonFactory) {
        Assert.notNull(beanName, "Bean name must not be null");
        synchronized (this.singletonObjects) {
            Object singletonObject = this.singletonObjects.get(beanName);
            if (singletonObject == null) {
                // 省略无关代码
                beforeSingletonCreation(beanName); // 步骤A
                boolean newSingleton = false;
                // 省略无关代码
                try {
                    singletonObject = singletonFactory.getObject();// 步骤B
                    newSingleton = true;
                }
                // 省略无关代码
                finally {
                    if (recordSuppressedExceptions) {
                        this.suppressedExceptions = null;
                    }
                    afterSingletonCreation(beanName);// 步骤C
                }
                if (newSingleton) {
                    addSingleton(beanName, singletonObject);// 步骤D
                }
            }
            return singletonObject;
        }
    }
```

**获取单例对象的主要逻辑就是此方法实现的**，主要分为上面四个步骤，继续挨个看：

步骤A：

```
 protected void beforeSingletonCreation(String beanName) {
         // 判断，并首次将beanName即teacher放入singletonsCurrentlyInCreation中
         if (!this.inCreationCheckExclusions.contains(beanName) && !this.singletonsCurrentlyInCreation.add(beanName)) {
             throw new BeanCurrentlyInCreationException(beanName);
         }
     }
```

步骤C：

```
 protected void afterSingletonCreation(String beanName) {
         // 得到单例对象后，再讲beanName从singletonsCurrentlyInCreation中移除
         if (!this.inCreationCheckExclusions.contains(beanName) && !this.singletonsCurrentlyInCreation.remove(beanName)) {
             throw new IllegalStateException("Singleton '" + beanName + "' isn't currently in creation");
         }
     }
```

步骤D：

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
 protected void addSingleton(String beanName, Object singletonObject) {
         synchronized (this.singletonObjects) {
             this.singletonObjects.put(beanName, singletonObject);//添加单例对象到map中
             this.singletonFactories.remove(beanName);//从早期暴露的工厂中移除，此map在解决循环依赖中发挥了关键的作用
             this.earlySingletonObjects.remove(beanName);//从早期暴露的对象map中移除
             this.registeredSingletons.add(beanName);//添加到已注册的单例名字集合中
         }
     }
```

步骤B：

​    此处调用了ObjectFactory的getObject方法，此方法是在哪里实现的呢？返回的又是什么？且往回翻，找到3中的方法3，对java8函数式编程有过了解的园友应该能看出来，方法3 【createBean(beanName, mbd, args)】的返回值就是getObject方法的返回值，即方法3返回的就是我们需要的单例对象，下面且追踪方法3而去。

**3.3）AbstractAutowireCapableBeanFactory#createBean(java.lang.String, org.springframework.beans.factory.support.RootBeanDefinition, java.lang.Object[]) 方法**

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
  protected Object createBean(String beanName, RootBeanDefinition mbd, @Nullable Object[] args)
              throws BeanCreationException {
  
          // 省略无关代码
          try {
              Object beanInstance = doCreateBean(beanName, mbdToUse, args);
              return beanInstance;
          }
          // 省略无关代码
     }
```

去掉无关代码之后，关键方法只有doCreateBean方法，追踪之：

```
protected Object doCreateBean(final String beanName, final RootBeanDefinition mbd, final @Nullable Object[] args)
            throws BeanCreationException {

        BeanWrapper instanceWrapper = null;
        // 省略代码
        if (instanceWrapper == null) {
            // 实例化bean
            instanceWrapper = createBeanInstance(beanName, mbd, args);
        }
        boolean earlySingletonExposure = (mbd.isSingleton() && this.allowCircularReferences &&
                isSingletonCurrentlyInCreation(beanName));
        if (earlySingletonExposure) {
            // 重点！！！将实例化的对象添加到singletonFactories中
            addSingletonFactory(beanName, () -> getEarlyBeanReference(beanName, mbd, bean));
        }
        // 初始化bean
        Object exposedObject = bean;
        try {
            populateBean(beanName, mbd, instanceWrapper);//也很重要
            exposedObject = initializeBean(beanName, exposedObject, mbd);
        }
        // 省略无关代码
        return exposedObject;
}
```

​    上面注释中标出的重点是此方法的关键。在addSingletonFactory方法中，将第二个参数ObjectFactory存入了singletonFactories供其他对象依赖时调用。然后下面的**populateBean方法对刚实例化的bean进行属性注入（该方法关联较多，本文暂时不展开追踪了，有兴趣的园友自行查看即可）**，如果遇到Spring中的对象属性，则再通过getBean方法获取该对象。至此，循环依赖在Spring中的处理过程已经追溯完毕，下面我们总结一下。

**小结**

​    属性注入主要是在populateBean方法中进行的。对于循环依赖，以我们上文中的Teacher中注入了Student、Student中注入了Teacher为例来说明，假定Spring的加载顺序为先加载Teacher，再加载Student。

getBean方法触发Teacher的初始化后：

  a. 首先走到3中的方法1），此时map中都为空，获取不到实例；

  b. 然后走到方法2）中，步骤A、步骤C、步骤D为控制map中数据的方法，实现简单，可暂不关注。其中步骤B的getObject方法触发对方法3)的调用；

  c. 在方法3）中，先通过createBeanInstance实例化Teacher对象，又将该实例化的对象通过addSingletonFactory方法放入singletonFactories中，完成Teacher对象早期的暴露；

  d. 然后在方法3）中通过populateBean方法对Teacher对象进行属性的注入，发现它有一个Student属性，则触发getBean方法对Student进行初始化

  e. 重复a、b、c步骤，只是此时要初始化的是Student对象

  f. 走到d的时候，调用populateBean对Student对象进行属性注入，发现它有一个Teacher属性，则触发getBean方法对Teacher进行初始化；

  g. 对Teacher进行初始化，又来到a，但此时map已经不为空了，因为之前在c步骤中已经将Teacher实例放入了singletonFactories中，a中得到Teacher实例后返回；

  h.完成f中对Student的初始化，继而依次往上回溯完成Teacher的初始化；

完成Teacher的初始化后，Student的初始化就简单了，因为map中已经存了这个单例。

至此，Spring循环依赖的总结分析结束，一句话来概括一下：**Spring通过将实例化后的对象提前暴露给Spring容器中的singletonFactories，解决了循环依赖的问题**。