
数据库设计过程中，我们往往会给数据库表添加一些通用字段，比如创建人、创建时间、修改人、修改时间，在一些公司的设计过程中有时会强制要求每个表都要包含这些基础信息，以便记录数据操作时的一些基本日志记录。按照平常的操作来说，通用做法是输写sql时，将这些信息和对象的基本属性信息一起写入数据库，当然，这也是大家习以为常的操作，这种写法无可厚非，但是对于一个高级开发人员来说，如果所有的表都进行如此操作，未免显得有点啰嗦，而且数据表多的话，这样写就有点得不偿失了。其实还有一种更简便的做法，spring框架大家应该是比较熟悉的，几乎每个公司都会用到，其中aop思想(切面编程)的经典应用场景之一就是日志记录，本文结合aop思想，着重介绍下springboot框架下如何利用切面编程思想实现将创建人、创建时间、更新人、更新时间等基础信息写入数据库。

```java
@Aspect
@Component
@Configuration
public class CommonDaoAspect {

    private static final String creater = "creater";
    private static final String createTime = "createTime";
    private static final String updater = "updater";
    private static final String updateTime = "updateTime";

    @Pointcut("execution(* com.xx.xxxx.*.dao.*.update*(..))")
    public void daoUpdate() {
    }

    @Pointcut("execution(* com.xx.xxxx.*.dao.*.insert*(..))")
    public void daoCreate() {
    }

    @Around("daoUpdate()")
    public Object doDaoUpdate(ProceedingJoinPoint pjp) throws Throwable {
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (attributes == null) {
            return pjp.proceed();
        }
        HttpServletRequest request = attributes.getRequest();
        String token = request.getHeader("token");
        String username = getUserName();
        if (token != null && username != null) {
            Object[] objects = pjp.getArgs();
            if (objects != null && objects.length > 0) {
                for (Object arg : objects) {
                    BeanUtils.setProperty(arg, updater, username);
                    BeanUtils.setProperty(arg, updateTime, new Date());
                }
            }
        }
        Object object = pjp.proceed();
        return object;

    }

    @Around("daoCreate()")
    public Object doDaoCreate(ProceedingJoinPoint pjp) throws Throwable {
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (attributes == null) {
            return pjp.proceed();
        }
        Object[] objects = pjp.getArgs();
        if (objects != null && objects.length > 0) {
            for (Object arg : objects) {
                String username = getUserName();
                if (username != null) {
                    if (StringUtils.isBlank(BeanUtils.getProperty(arg, creater))) {
                        BeanUtils.setProperty(arg, creater, username);
                    }
                    if (StringUtils.isBlank(BeanUtils.getProperty(arg, createTime))) {
                        BeanUtils.setProperty(arg, createTime, new Date());
                    }
                }
            }
        }
        Object object = pjp.proceed();
        return object;
    }

    private String getUserName() {
        return UserUtils.getUsername();
    }
}
```
1.代码介绍

核心代码声明了一个CommonDaoAspect切面类，实体类中声明了4个核心方法和一个获取用户名信息的方法，UserUtils是项目中声明的工具类，包含获取用户id、姓名等一些基础信息，大家可以根据自己的实际情况去定义，不要照部就搬。4个核心方法中，daoUpdate和daoCreate上添加了@Pointcut注解，该注解通过声明正则表达式来确定项目包中dao目录下哪些方法执行该切面方法。doDaoUpdate和doDaoCreate方法上添加了@Around注解，注解中引入了上述两个方法，表示环绕通知,在我们自己dao目录下的对应文件目标方法完成前后做增强处理。


2.注解说明

@Aspect:声明切面类，里面可以定义切入点和通知
@Component：表明该类是spring管理的一个对象
@Pointcut：切入点，通过正则表达式声明切入的时机，本文中是在目标方法(即项目中dao目录下实体类中包含insert或update字符串的方法)执行时加入切入信息，即执行新增或更新时加入创建人和更新人等信息。
@Around:环绕通知,在目标方法完成前后做增强处理，本案例中表示在doCreate和doUpdate方法执行时添加参数信息
注：execution(* com.xx.xxxx.*.dao.*.update*(..)) 表示在dao目录下的任何文件中的以update开头的方法
execution(* com.xx.xxxx.*.dao.*.insert*(..)) 表示在dao目录下的任何文件中的以insert开头的方法
由于才疏学浅，能力有限，对于文章中描述不准确或不恰当的地方，希望大家能够及时指出和纠正，在编码的路上一起努力前行。如果这篇文章对你有帮助的话，也希望能够给点赞加关注哦，你的认可和喜欢是我持续输出的最大动力。

推荐下自己做的 Spring Boot 的实战项目：
https://github.com/YunaiV/ruoyi-vue-pro