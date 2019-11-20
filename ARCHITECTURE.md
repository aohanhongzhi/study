# ARCHITECTURE

## 微服务架构

### 微服务架构设计原则

架构分层有不同的方法论，常见有五六层。这里有四层的：

* 业务架构
* 逻辑架构
* 技术架构
* 基础架构

#### 业务架构

如果没有设计好产品的运营模式，技术实现再好，公司最后还是会倒闭的。对于中小型互联网公司而言，所有的技术经理和架构师都应该早早的介入这个层次的设计，对理解公司业务规划，以及反过来切合业务嘉兴架构设计都有好处。毕竟我们大多数人都是在为业务服务，难道不是吗？——《Docker微服务架构实战》

#### 逻辑架构

##### 聚合微服务设计模式


##### 代理微服务设计模式


##### 链式微服务设计模式

##### 分之微服务设计模式

#### 技术架构

很多程序员会认为技术架构就是SpringCloud，Dubbo这种框架。起始他们只是技术架构的子集。

技术架构还可以细分成 开发架构，运行架构，数据架构。

技术架构应该包括以下几点：

1. 服务治理框架
1. 各种开源框架的二次开发与封装
1. 代码开发规范
1. 代码检查和日编译
1. Maven规范和治理，也就是项目构建工具的管理，不限于maven，还有gradle等
1. 各种定制的中间件
1. 数据表的设计
1. 数据逻辑库的拆分 

#### 基础架构

基础架构的参与者是运维工程师、网络工程师、架构师。

基础架构包含物理机、网络、机架、防火墙、交换机、WAP、磁盘阵列。

## 企业开发技术

### Docker
容器化部署，智能运维，几万个节点的部署。

### ELK
构建统一的日志分析处理平台

### [Apollo](https://github.com/ctripcorp/apollo/wiki)
Apollo（阿波罗）是携程框架部门研发的 **分布式配置中心** ，能够集中化管理应用不同环境、不同集群的配置，配置修改后能够实时推送到应用端，并且具备规范的权限、流程治理等特性，适用于微服务配置管理场景。

服务端基于Spring Boot和Spring Cloud开发，打包后可以直接运行，不需要额外安装Tomcat等应用容器。

Java客户端不依赖任何框架，能够运行于所有Java运行时环境，同时对Spring/Spring Boot环境也有额外支持。

### 事务管理中间件

#### Seata
分布式事务中间件

https://www.oschina.net/p/seata


### 分布式文件存储

#### FastDFS
https://gitee.com/fastdfs100/fastdfs


### 数据库

#### MySQL

#### postgresql 

#### TiDB
 开源分布式 NewSQL 关系型数据库

https://pingcap.com/index.html

#### TBase

https://www.oschina.net/p/tbase

https://github.com/Tencent/TBase


 是腾讯数据平台团队在开源的 PostgreSQL 基础上研发的企业级分布式 HTAP 数据库管理系统：

具备高性能可扩展的分布式事务能力，支持 RC 和 RR 两种隔离级别；

通过安全、管理、审计三权分立体系，提供全方位的数据安全保证机制；

支持高性能分区表，可使得数据检索效率成倍提升；

SQL 方面兼容 2003 标准、PostgreSQL 语法和常用 Oracle 函数&数据类型、窗口函数等；

提供大小商户数据分离、冷热数据分离等高效的数据治理能力

---
## Java技术栈

### 通用中间件

框架名 | 说明 | 官网
--- | --- | ---
Lombok | 简化对象封装| [https://github.com/rzwitserloot/lombok](https://github.com/rzwitserloot/lombok)
Redis|缓存| [https://redis.io/](https://redis.io/)
JWT | JWT登录支持 | [https://github.com/jwtk/jjwt](https://github.com/jwtk/jjwt)
MongoDb | NoSql数据库 | [https://www.mongodb.com/](https://www.mongodb.com/)
Docker | 应用容器引擎 | [https://www.docker.com/](https://www.docker.com/)
Druid | 数据库连接池 | [https://github.com/alibaba/druid](https://github.com/alibaba/druid)
RabbitMq | 消息队列 | [https://www.rabbitmq.com/](https://www.rabbitmq.com/)

---

### 企业级应用开发技术栈

技术 | 说明 | 官网
----|----|----
Spring Boot | 容器+MVC框架 | [https://spring.io/projects/spring-boot](https://spring.io/projects/spring-boot)
Spring Security | 认证和授权框架 | [https://spring.io/projects/spring-security](https://spring.io/projects/spring-security)
MyBatis | ORM框架  | [http://www.mybatis.org/mybatis-3/zh/index.html](http://www.mybatis.org/mybatis-3/zh/index.html)
MyBatis-plus | ORM框架增强  | [https://mybatis.plus/](https://mybatis.plus/)
MyBatisGenerator | 数据层代码生成 | [http://www.mybatis.org/generator/index.html](http://www.mybatis.org/generator/index.html)
PageHelper | MyBatis物理分页插件 | [http://git.oschina.net/free/Mybatis_PageHelper](http://git.oschina.net/free/Mybatis_PageHelper)
Swagger-UI | 文档生产工具 | [https://github.com/swagger-api/swagger-ui](https://github.com/swagger-api/swagger-ui)
Hibernator-Validator | 验证框架 | [http://hibernate.org/validator/](http://hibernate.org/validator/)
Elasticsearch | 搜索引擎，毫秒级 | [https://github.com/elastic/elasticsearch](https://github.com/elastic/elasticsearch)
RabbitMQ | 消息队列 | [https://www.rabbitmq.com/](https://www.rabbitmq.com/)
Redis | 分布式缓存 | [https://redis.io/](https://redis.io/)
MongoDb | NoSql数据库，日志文档存储 | [https://www.mongodb.com/](https://www.mongodb.com/)
Docker | 应用容器引擎 | [https://www.docker.com/](https://www.docker.com/)
Druid | 数据库连接池 | [https://github.com/alibaba/druid](https://github.com/alibaba/druid)
OSS | 对象存储 | [https://github.com/aliyun/aliyun-oss-java-sdk](https://github.com/aliyun/aliyun-oss-java-sdk)
JWT | JWT登录支持 | [https://github.com/jwtk/jjwt](https://github.com/jwtk/jjwt)
LogStash | 日志收集 | [https://github.com/logstash/logstash-logback-encoder](https://github.com/logstash/logstash-logback-encoder)
Lombok | 简化对象封装工具 | [https://github.com/rzwitserloot/lombok](https://github.com/rzwitserloot/lombok)

---

### SpringCloud家族
框架 | 说明 | 官网
----|----|----
SpringBoot | JavaBean容器| [https://spring.io/projects/spring-boot](https://spring.io/projects/spring-boot)
Spring Vault | 数据库动态密码管理，敏感配置信息管理 | https://spring.io/projects/spring-vault

---

### 技术栈1

对于一个小型的应用，快速搭建可以使用

应用层次 | 框架名 | 推荐理由
--- | --- | ---
前端交互|[Sparkjava](http://sparkjava.com/)| 更加简单的url-方法
服务层| [Spring-context](https://mvnrepository.com/artifact/org.springframework/spring-context)|控制翻转，Bean注入
ORM层| [rexdb](http://db.rex-soft.org/)|高效灵活简单
关系数据库|[postgresql](https://www.postgresql.org/)|开源自由

---

## Python

### flask

flask
