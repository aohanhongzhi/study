# SpringBoot

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

### SpringSecurity

#### git源代码
1. https://github.com/hansonwang99/Spring-Boot-In-Action/tree/master/springbt_security_jwt
1. https://github.com/zhshuixian/learn-spring-boot-2/tree/master/06-security-token



### RSA接口自动加解密
https://gitee.com/ishuibo/rsa-encrypt-body-spring-boot
https://mp.weixin.qq.com/s/Y2zv8Afd6yZGGdLiA7lUJw
