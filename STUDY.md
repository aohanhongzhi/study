# 我学习过的知识
## <font face="黑体" color=green size=5>Java</font>
### 基础
1. `SimpleDataFormatter`是线程不安全的，`DateTimeFormatter`java8才有的线程安全获取时间格式。
### Spring
1. SpringBoot的@EnableAsync， @Async注解使用及其原理
1. SpringBoot配置Redis查询缓存。三个注解。开启注解（@EnableCaching），使用注解，清除注解。重点在于key的自定义方式。
    * [SpringBoot下Redis模糊删的AOP实现](https://docs.qq.com/doc/DSExjdkFka3VEWlR0)
1. ssl配置，iptable端口转发。
![来自PrintWevServer-SpringBoot工程](./端口转发.png)
1. SpringBoot devtools热加载技术，开发的时候使用，至少html修改后刷新即可。devtools在线上模式自动屏蔽了，即java -jar启动方式。
### Mybatis
1. Mybatis-plus 通用性接口与jpa一样。
1. pagehelper，分页插件
### logback
1. [logback.xml文件中配置javax.mail发送错误信息邮件](https://docs.qq.com/doc/DSFhiWENKWVJwa3B1)
1. logback-spring.xml,logback-test.xml,logback-dev.xml，日志随环境变量设置，目前仅仅测试于SpringBoot。

### rexdb
1. 一种国产的ORM框架，性能据官网介绍还不错。


### mail
1. java mail邮件发送，163邮件配置，ip被封杀查看，telnet 查看ip与port

### security
1. java JWT掌握， **目前缓存没有配置成功** 。



---
## Python

### flask
1. python的flask使用gunicorn部署，docker应用部署python flask
2. flask 的MVC模型构建
3. yaml配置文件设置
---
## Go
### beego
1. beego框架入门
1. goframe新框架了解 https://goframe.org/

---
## MySql
### security
1. 防止暴力破解密码

---
## Docker
### registry
1. 阿里云docker仓库使用，本地推送镜像到云上，服务器拉取阿里云docker镜像部署
--- 
## Redis
1. SpringBoot配置redis缓存查询。
---
## Gradle
1. 依赖分析
    * `gradle dependencyInsight --dependency slf4j-api`
---
## 通识
1. 代码中不要使用ip，因位ip会改变，最好使用域名。
1. 代码中不要使用绝对地址，存在安全性问题，此外也会造成数据库存储空间浪费。
