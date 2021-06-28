SpringBoot
===
## 两个常见原理

面试经常问到的知识点

### 循环依赖的解决

https://zhuanlan.zhihu.com/p/346711149

### SpringBoot AutoConfiguration

https://www.jianshu.com/p/1ed18eebb299


### 事务

Spring的事务就是ThreadLocal里面装了Connection，数据库连接池。

> https://blog.csdn.net/qq_34337272/article/details/80394121 

#### 什么是事务？
指作为单个逻辑工作单元执行的一系列操作，要么完全地执行，要么完全地不执行。 简单的说，事务就是并发控制的单位，是用户定义的一个操作序列。


### 多线程中事务的处理

1. [解决多线程批量插入中的事物一致性问题](https://blog.csdn.net/weixin_42324471/article/details/106279460)
1. [Java 多线程事务回滚 ——多线程插入数据库时事务控制](https://blog.csdn.net/shehuinidaye/article/details/89385200)

## 启动程序
1. 环境变量配置
    * logback-prod.xml
    * application-prod.yml
1. 启动命令

    * 正常情况下启动命令
    ```shell
            java -jar  print-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod
    ```
    * 如果上面启动方式失效，则可以尝试下面的方式，将程序的参数前置。
    ```shell
            java -jar -Dspring.profiles.active=prod print-0.0.1-SNAPSHOT.jar
    ```


## 常用操作

### 获取yaml配置信息

```java
    import org.springframework.core.env.Environment;


	@Autowired
	private Environment env;


    String redisHost = env.getProperty("spring.redis.host");
    String redisDatabase = env.getProperty("spring.redis.database");
    String password = env.getProperty("spring.redis.password");
    String port = env.getProperty("spring.redis.port");
```




## 常用注解

### Controller

一般是返回界面，常和模板引擎一起使用

### RestController

一般是返回json格式的数据，常用restful形式开发。

### Service

服务层的注解，目的就是为了注册bean，一般来说service多半是使用其方法，而不是其Field，所以这个注入的是单例。

### Import

直接注入一个bean。

### MapperScan

mapper所在包的bean注入方式。与Import一样，就是个数不限。mapper包下下面的java文件可以不需要@Mapper注解了

```
@MapperScan("hxy.print.server.mapper")
```

### Mapper

这不是Spring里面的注解一般是mybatis的，所以可能不会生效，解决办法就是使用MapperScan

### Scope

这个决定了bean的注入方式，采用原型（不是单例），还是单例（默认是单例）。

### Lazy

懒加载



### 基于SpringBoot的优秀脚手架

1. [基于Spring Boot-Shiro-Vue的权限管理](https://github.com/Heeexy/SpringBoot-Shiro-Vue)
2. 


## SpringCloud

https://start.spring.io/actuator/info

### SpringSecurity

#### git源代码
1. https://github.com/hansonwang99/Spring-Boot-In-Action/tree/master/springbt_security_jwt
1. https://github.com/zhshuixian/learn-spring-boot-2/tree/master/06-security-token



### RSA接口自动加解密
https://gitee.com/ishuibo/rsa-encrypt-body-spring-boot
https://mp.weixin.qq.com/s/Y2zv8Afd6yZGGdLiA7lUJw

### 数据库相关

#### 读写分离

> https://gitee.com/mirrors/spring-boot-mybatis-rw

spring-boot-mybatis-rw 基于mybatis，springboot开箱即用的读写分离插件 Quick Start 介绍 此插件由以下2部分组成

#### 多数据源

https://gitee.com/zhaoqg/spring-boot-mybatis


## 源码学习
### springboot-guide
https://github.com/Snailclimb/springboot-guide

### jackson
> github https://github.com/FasterXML/jackson-databind/

### slf4j-spring-boot-starter
> gitee  https://gitee.com/xsxgit/slf4j-spring-boot-starter

切面技术实现注解搞定日志记录。可以用来二次开发操作日志等记录。

### xxl-job-spring-boot-starter

> gitee https://gitee.com/centy/xxl-job-spring-boot-starter

本项目将xxl-job-core包简单封装成spring boot starter，方便通过Spring Boot方式开发xxl-job的executor


### spring-boot-mybatis-sample
> https://gitee.com/smarti/spring-boot-mybatis-sample

SpringBoot和Mybatis整合，并同时用JPA和Mybatis分别连接2个数据库(oracle/mysql等任意组合)

### scm-springboot

> https://gitee.com/zhys513/scm-springboot

基于spring boot的统一注解缓存，支持mencached、redis、ehcache的缓存无缝切换。支持单个缓存设置过期时间，灵活的key设置规则，采用fastjson序列化与反序列化，以json串存于缓存之中。根据命名空间管理缓存集。

### printparam-spring-boot-starter

> https://gitee.com/sjlian/printparam-spring-boot-starter

自动在日志中打印输入输出参数，快捷方便，无需任何配置项，依赖少，开箱即用。

### 若干 starter集合

https://gitee.com/saizz/stater-module

### trace-log-spring-boot-starter

https://gitee.com/ddfeiyu/trace-log-spring-boot-starter


一个简单易用的java分布式链路跟踪日志组件 一.系统介绍 1、无入侵的分布式日志系统，基于elk搜集日志，采用Skywalking设置链路ID，方便查询关联日志 2、基于elasticsearch作为查询引擎 3、高吞吐，查询效率高 4、支持redis实时日志、es历史日志查询

