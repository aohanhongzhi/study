## Spring的并发问题——有状态Bean和无状态Bean

**一、有状态和无状态**

**有状态会话bean**  ：每个用户有自己特有的一个实例，在用户的生存期内，bean保持了用户的信息，即“有状态”；一旦用户灭亡（调用结束或实例结束），bean的生命期也告结束。即每个用户最初都会得到一个初始的bean。简单来说，有状态就是有数据存储功能。有状态对象(Stateful Bean)，就是有实例变量的对象 ，可以保存数据，是**非线程安全**的。
**无状态会话bean**  ：bean一旦实例化就被加进会话池中，各个用户都可以共用。即使用户已经消亡，bean  的生命期也不一定结束，它可能依然存在于会话池中，供其他用户调用。由于没有特定的用户，那么也就不能保持某一用户的状态，所以叫无状态bean。但无状态会话bean  并非没有状态，如果它有自己的属性（变量），那么这些变量就会受到所有调用它的用户的影响，这是在实际应用中必须注意的。简单来说，无状态就是一次操作，不能保存数据。无状态对象(Stateless Bean)，就是没有实例变量的对象 .不能保存数据，是不变类，是**线程安全**的。

```
package com.sw;

public class TestManagerImpl implements TestManager{
    private User user;    //有一个记录信息的实例

    public void deleteUser(User e) throws Exception {
        user = e ;           //1
        prepareData(e);
    }

    public void prepareData(User e) throws Exception {
        user = getUserByID(e.getId());            //2
        .....
        //使用user.getId();                       //3
        .....
        .....
    }    
}
```

 

**二、解决有状态bean的线程安全问题**

Spring对bean的配置中有四种配置方式，我们只说其中两种：singleton单例模式、prototype原型模式。

```
<bean id="testManager" class="com.lagou.TestManagerImpl" scope="singleton" />

<bean id="testManager" class="com.lagou.TestManagerImpl" scope="prototype" />
```

默认的配置是**singleton**。

singleton表示该bean全局只有一个实例。

prototype表示该bean在每次被注入的时候，都要重新创建一个实例，这种情况适用于有状态的Bean。

 

如果对有状态的bean使用了singleton的话会出现线程安全问题。

例如上面的例子，如果有两个用户同时访问，假定为user1,user2

当user1 调用到程序中的1步骤的时候，该Bean的私有变量user被付值为user1

当user1的程序走到2步骤的时候，该Bean的私有变量user被重新付值为user1_create

理想的状况，当user1走到3步骤的时候，私有变量user应该为user1_create;

但如果在user1调用到3步骤之前，user2开始运行到了1步骤了，由于单态的资源共享，则私有变量user被修改为user2

这种情况下，user1的步骤3用到的user.getId()实际用到是user2的对象。



对于这种情况我们可以这样解决

1.将有状态的bean配置成prototype模式，让每一个线程都创建一个prototype实例。但是这样会产生很多的实例消耗较多的内存空间。

2.使用ThreadLocal变量，为每一条线程设置变量副本。

 

​	使用ThreadLocal的例子：

​	例如，我们有一个银行的BankDAO类和一个个人账户的PeopleDAO类，现在需要个人向银行进行转账，在PeopleDAO类中有一个账户减少的方法，BankDAO类中有一个账户增加的方法，那么这两个方法在调用的时候必须使用同一个Connection数据库连接对象，如果他们使用两个Connection对象，则会开启两段事务，可能出现个人账户减少而银行账户未增加的现象。使用同一个Connection对象的话，在应用程序中可能会设置为一个全局的数据库连接对象，从而避免在调用每个方法时都传递一个Connection对象。问题是当我们把Connection对象设置为全局变量时，你不能保证是否有其他线程会将这个Connection对象关闭，这样就会出现线程安全问题。解决办法就是在进行转账操作这个线程中，使用ThreadLocal中获取Connection对象，这样，在调用个人账户减少和银行账户增加的线程中，就能从ThreadLocal中取到同一个Connection对象，并且这个Connection对象为转账操作这个线程独有，不会被其他线程影响，保证了线程安全性。

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
public class ConnectionHolder {
    
    public static ThreadLocal<Connection> connectionHolder = new ThreadLocal<Connection>() {
    };
    
    public static Connection getConnection(){
        Connection connection = connectionHolder.get();
        if(null == connection){
            connection = DriverManager.getConnection(DB_URL);
            connectionHolder.set(connection);
        }
        return connection;
    }
 
}
```

​	对于多线程资源共享的问题，同步机制采用了“以时间换空间”的方式，而 ThreadLocal 采用了“以空间换时间”的方式。前者仅提供一份变量，让不同的线程排队访问，而后者为每一个线程都提供了一份变量，因此可以同时访问而互不影响。