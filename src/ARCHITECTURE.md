# ARCHITECTURE

## 微服务架构
微服务 = 分布式开发(业务部分) + 服务治理(管理调度)
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

##### 分支微服务设计模式

#### 技术架构

很多程序员会认为技术架构就是SpringCloud，Dubbo这种框架。起始他们只是技术架构的子集。

技术架构还可以细分成 开发架构，运行架构，数据架构。

技术架构应该包括以下几点：

1. 服务治理框架
1. 各种开源框架的二次开发与封装
1. 代码开发规范,GitFlow
1. 代码检查和日编译
1. 模块化，分层，Maven规范和治理，也就是项目构建工具的管理，不限于maven，还有gradle等
1. 各种定制的中间件
1. 数据表的设计
1. 数据逻辑库的拆分 

#### 基础架构

基础架构的参与者是运维工程师、网络工程师、架构师。

基础架构包含物理机、网络、机架、防火墙、交换机、WAP、磁盘阵列。

#### 微服务交付流程

使用微服务架构开发应用程序，我们实际上是针对一个个微服务进行设计、开发、测试、部署，因为每个服务之间是没有彼此依赖的，也就是每一个应用都是并行开发。

在设计阶段，架构师将产品功能拆分成若干服务，为每一个服务设计API接口（例如RESTAPI），需要给出API文档，包括API的名称、版本、请求参数、响应结果、错误代码等信息。

## 企业开发技术

### 容器

#### Docker
容器化部署，智能运维，几万个节点的部署。
https://yeasy.gitbooks.io/docker_practice/
#### Rancher

容器编排工具

<https://www.rancher.cn/>

### 服务注册与发现

分布式系统中有一个非常著名的CAP定理，C表示数据一致性，A表示服务可用性，P表示服务对网络分区故障的容错性。这三个特性在任何分布式系统中都不能同时满足，最多只能满足两个。本质上ZooKeeper是一个CP实现，而Eureka是一个AP实现。

#### ZooKeeper

非常优秀的服务发现与注册中间件。由于其CP实现形式，被一大批生态软件采用。

#### SpringCloud Eureka
AP实现，采用Peer2Peer对等通信方式，去中心化的方式，无Master/Slaver区分，每一个Peer都是对等的。

Eureka作为服务发现与注册中心，即使整个Eureka集群宕机，消费者还是可以通过自己之前的缓存获取注册表的！也就是每一个消费者并不是简单的获取自己想要的信息，而是所有信息。这也就解释了服务端的负载均衡与Eureka端的负载均衡。因为都是有完整的注册表的（缓存，即使Eureka宕机，也是可以的），所以知道怎么负载均衡！

 **总结**

    Zookeeper基于CP，不保证高可用性，如果ZooKeeper正在进行Master选举，或者Zookeeper集群中超过半数以上的机器不可用，那么将无法获得数据。Eureka基于AP，能保证高可用性，即使所有机器都出现故障，也能获取本地缓存的数据。
    
    作为注册中心，其实配置是不经常变动的，只有应用发布和机器出现故障时才会变动。对于不经常变动的配置来说，CP是不合适的，而AP在遇到问题时可以用牺牲一致性来保证高可用性，即使返回旧数据，缓存数据。
    
    因为Dubbo推荐ZooKeeper，因此国内大量的服务都用ZooKeeper来实现服务发现，但是从分布式理论上来看，Eureka更适合用作注册中心的。
    
    ——《Docker微服务架构实战》

#### Consul

分布式协同工具，Spring cloud Consul。Consul是一个服务网格（微服务间的 TCP/IP，负责服务之间的网络调用、限流、熔断和监控）解决方案，它是一个一个分布式的，高度可用的系统，而且开发使用都很简便。它提供了一个功能齐全的控制平面，主要特点是：服务发现、健康检查、键值存储、安全服务通信、多数据中心。

https://spring.io/projects/spring-cloud-consul

<https://www.jianshu.com/p/7d20dc58c9fc>

#### Nacos

https://nacos.io/zh-cn/

一个更易于构建云原生应用的动态服务发现、配置管理和服务管理平台。说白了就是相当于eureka+Apollo，这个是阿里巴巴开源的，使用的公司还是很多的（国内居多，因为有幺蛾子表示Eureka2.+胎死腹中，存在闭源风险。然而这种下一版本停止的太多了）。


### 日志

#### ELK

构建统一的日志分析处理平台。可以做很多的事。数据分析等

#### 链路分析 minbox-logging

https://gitee.com/minbox-projects/minbox-logging


### 监控

#### WGCLOUD

https://www.wgstart.com/

https://gitee.com/wanghouhou/wgcloud

#### 夜莺

Nightingale是一套衍生自Open-Falcon的互联网监控解决方案，融入了滴滴的最佳实践，由于改动太大，优化太多，产品上已经无法与Open-Falcon平滑兼容，故而单开一个项目。

<http://n9e.didiyun.com/>

### 运维

http://ansible.com.cn/docs/intro.html

#### log-pilot

#### Splunk

#### Zabbix

用的应该也比较多

<https://www.zabbix.org.cn/>

参考：<https://www.cnblogs.com/clsn/p/7885990.html>

### 配置中心
在功能架构上，一个优秀的配置中心应该包括以下功能点。

* 高可用
* 高容错
* 提供管理界面
* 多维度配置
* 灰度配置
* 权限/审计/审查
* 低侵入式接入
* 易维护
* 安全


#### Apollo (推荐)
[Apollo](https://github.com/ctripcorp/apollo/wiki)（阿波罗）是携程框架部门研发的 **分布式配置中心** ，能够集中化管理应用不同环境、不同集群的配置，配置修改后能够实时推送到应用端，并且具备规范的权限、流程治理等特性，适用于微服务配置管理场景。

服务端基于Spring Boot和Spring Cloud开发，打包后可以直接运行，不需要额外安装Tomcat等应用容器。

Java客户端不依赖任何框架，能够运行于所有Java运行时环境，同时对Spring/Spring Boot环境也有额外支持。

#### Spring Cloud Config + Git (小型系统推荐)
没有管理界面

### 消息中间件

#### RabbitMQ

集群部署并不是很好，处理消息在万级别

#### kafka

高吞吐，累积多

#### RocketMQ





### 事务管理中间件

#### Seata
分布式事务中间件

https://www.oschina.net/p/seata


### 分布式文件存储

#### FastDFS
https://gitee.com/fastdfs100/fastdfs


### 数据库

#### 数据库相关中间件

##### 分布式MySQL工具集Vitess
> 官网 https://vitess.io/

outube出品的开源分布式MySQL工具集Vitess，自动分片存储MySQL数据表，将单个SQL查询改写为分布式发送到多个MySQL Server上，支持行缓存（比MySQL本身缓存效率高），支持复制容错，已用于Youtube生产环境

#### MySQL

目前8.+，性能是5.7的两倍，而且增加了很多新特性。MySQL有很多的版本，如果集群部署的话，可以考虑使用cluster版本。可以参考mycat中间件。

#### MariaDB

mysql被Oracle收购之后，原班人马基于MySQL开源分之，开发了新的完全兼容MySQL的分支。一旦MySQL闭源。可以用MariaDB来替代。

#### Postgresql 

优秀的开源数据库，据说这个数据更加现代化，比mysql更好。

#### TiDB
 开源分布式 NewSQL 关系型数据库（兼容MySQL协议）

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

### 网关API

#### OpenResty 

基于Nginx与Lua的高性能网关，性能稳定，API丰富。

#### Zuul

SpringCloud家族，智能网关。性能不输Nginx。Zuul的核心是一系列的Filter。

#### Nginx

单线程高性能网关。nignx可以在一次访问请求状态为500的时候，直接访问另一台服务器。做到热迁，参考 https://blog.csdn.net/wy0123/article/details/88551915



#### tengine

http://tengine.taobao.org/



#### HAProxy

HAProxy是一个免费的负载均衡软件，可以运行于大部分主流的Linux操作系统上。

HAProxy提供了L4(TCP)和L7(HTTP)两种负载均衡能力，具备丰富的功能。HAProxy的社区非常活跃，版本更新快速（最新稳定版1.7.2于2017/01/13推出）。最关键的是，HAProxy具备媲美商用负载均衡器的性能和稳定性。

因为HAProxy的上述优点，它当前不仅仅是免费负载均衡软件的首选，更几乎成为了唯一选择。

作者：kelgon
链接：https://www.jianshu.com/p/c9f6d55288c0
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

### 代码审查

#### sonarqube

可以使用这个做代码审查，做到bugfree。代码质量会影响后期的运行，内存溢出等等。

#### 阿里巴巴规范插件

### 项目构建工具

#### Gradle

地表最强的项目构建工具，不接受任何反驳

#### Maven

1. 生成doc文档 `mvn javadoc:javadoc`

#### Buildr

---
## Java技术栈

### ORM中间件

框架名 | 说明 | 官网
--- | --- | ---
mybatis |半自动化的ORM，灵活性更高 | 
mybatis-plus| mybatis的增强，全自动化。既有hibernate，jpa的自动化又有mybatis的灵活性 |https://mybatis.plus/
rexdb| 手写sql，https://gitee.com/rexsoft/rexdb |http://db.rex-soft.org/
hibernate | 全自动化 |
J2Cache | Java 两级缓存框架，可以让应用支持两级缓存框架 ehcache(Caffeine) + redis 。避免完全使用独立缓存系统所带来的网络IO开销问题 |<https://gitee.com/ld/J2Cache>

加密运行jar包 | Spring Boot JAR 安全加密运行工具，同时支持的原生JAR。 基于对JAR包内资源的加密以及拓展ClassLoader来构建的一套程序加密启动，动态解密运行的方案，避免源码泄露或反编译。 |<https://gitee.com/core-lib/xjar>
kisso | java 基于 Cookie 的 SSO 中间件 kisso |<https://gitee.com/baomidou/kisso>
jpa|SpringBoot常用的，个人体验不是很好 |
anima|blade框架作者杰作，无需sql | https://github.com/biezhi/anima
BeetlSQL|全功能DAO工具， 同时具有Hibernate 优点 & Mybatis优点功能，适用于承认以SQL为中心，同时又需求工具能自动能生成大量常用的SQL的应用。 <https://gitee.com/xiandafu/beetlsql> | <http://ibeetl.com/> 



个人推荐使用mybatis-plus比较好，既可以使用注解，也可以使用xml文件配置，还可以直接继承BaseMapper接口。灵活也不失自动化。


### 常用中间件

框架名 | 说明 | 官网
--- | --- | ---
Lombok | 简化对象封装| [https://github.com/rzwitserloot/lombok](https://github.com/rzwitserloot/lombok)
Redis|缓存| [https://redis.io/](https://redis.io/)
Caffeine|本地缓存，应用内存| <http://www.mydlq.club/article/56/> 
JWT | JWT登录支持 | [https://github.com/jwtk/jjwt](https://github.com/jwtk/jjwt)
MongoDb | NoSql数据库 | [https://www.mongodb.com/](https://www.mongodb.com/)
Docker | 应用容器引擎 | [https://www.docker.com/](https://www.docker.com/)
Druid | 数据库连接池 | [https://github.com/alibaba/druid](https://github.com/alibaba/druid)
HikariCP|SpringBoot2.+默认数据库连接池，性能非常优秀 | https://github.com/brettwooldridge/HikariCP
oh-my-email|Java 邮件发送库了，支持抄送、附件、模板 | <https://github.com/biezhi/oh-my-email> 
RabbitMq | 消息队列 | [https://www.rabbitmq.com/](https://www.rabbitmq.com/)
sso |java 基于 Cookie 的 SSO 中间件 kisso | [https://gitee.com/baomidou/kisso](https://gitee.com/baomidou/kisso)
okhttps| 基于okhttp封装 | https://gitee.com/ejlchina-zhxu/okhttps
验证码 | 基于 SpringBoot Google Kaptcha 验证码 快速启动器 |<https://gitee.com/baomidou/kaptcha-spring-boot-starter>
---

### 企业级应用开发技术栈

技术 | 说明 | 官网
----|----|----
Spring Boot | JavaBean容器 | [https://spring.io/projects/spring-boot](https://spring.io/projects/spring-boot)
SpringWeb | MVC框架 |  
Spring Security | 认证和授权框架 | [https://spring.io/projects/spring-security](https://spring.io/projects/spring-security)
Shiro |授权与认证 |
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
rsa-encrypt|Spring Boot 接口请求参数自动加解密 |https://gitee.com/catch_wind/rsa-encrypt-body-spring-boot
easy-excel|阿里巴巴excel处理工具 | https://alibaba-easyexcel.github.io/
captcha|行为验证码|https://gitee.com/anji-plus/captcha 
SpringBoot Google Kaptcha | 简单快速集成 Google Kaptcha验证码 | https://gitee.com/baomidou/kaptcha-spring-boot-starter




---

### SpringCloud家族

基于Restful的微服务框架。

##### 主角应用

主角应用一般是自己作为server独立存在。

组件 | 说明 | 官网
---|---|---
Eureka|服务注册与发现中心 | 
Admin|应用监控|
Zuul|网关|
Zipkin| 链路数据分析组件，Sleuth收集信息 |

##### 配角应用

配角应用一般是集成在其他组件里面，不能独立成为一个Server。

组件 | 说明 | 官网
---|---|---
Feign|服务之间的调用|
Ribbon|负载均衡，大多数 组件都默认集成了|
HyStrix|熔断降级|
Sleuth|信息收集，将信息发送给Zipkin|

##### 专业应用
组件 | 说明 | 官网
---|---|---
SpringCloudRabbitMQ|RabbitMQ客户端 |
SpringCloudRedis| Redis客户端|
SpringCloudMongoDB| MongoDB客户端|


SpringCloud Config不建议使用，可以使用携程的Apollo替代。


Spring家族官网：https://spring.io/

SpringCloud官网：https://spring.io/projects/spring-cloud

据了解SpringCloud官网提供了80多种中间件集成的starter。

##### 等待研究的中间件

框架 | 说明 | 官网
----|----|----
SpringBoot | JavaBean容器| [https://spring.io/projects/spring-boot](https://spring.io/projects/spring-boot)
Spring Vault | 数据库动态密码管理，敏感配置信息管理，需要安装vault。 | https://spring.io/projects/spring-vault
Vault |动态密码Server |https://www.hashicorp.com/products/vault/
spring-boot-starter-jersey |Restful Web服务，类似SpringMVC |https://blog.csdn.net/github_38395241/article/details/70265379
Consul | |https://spring.io/projects/spring-cloud-consul

---

### Dubbox + ZooKeeper
基于RPC的微服务框架

---
### Micronaut新一代的微服务框架
https://micronaut.io/

* Grails团队新宠；
* 可以用 Java、Groovy 和 Kotlin 编写的基于微服务的应用程序；
* 相比Spring Boot已经比较全面；
* 性能较优，编码方式与Spring Boot比较类似；
* 启动时间和内存消耗方面比其他框架更高效；
* 多语言；
* 依赖注入；
* 内置多种云本地功能；
* 很新，刚发布1.0.0

---

### 技术栈1

对于一个小型的应用，快速搭建可以使用。[sparkjava+spring+rexdb](https://github.com/aohanhongzhi/SparkDemo)

应用层次 | 框架名 | 推荐理由
--- | --- | ---
前端交互|[Sparkjava](http://sparkjava.com/)| 更加简单的url-方法
服务层| [Spring-context](https://mvnrepository.com/artifact/org.springframework/spring-context)|控制翻转，Bean注入
ORM层| [rexdb](http://db.rex-soft.org/)|高效灵活简单
关系数据库|[postgresql](https://www.postgresql.org/)|开源自由

---

### 技术栈2


应用层次 | 框架名 | 推荐理由
--- | --- | ---
前端与服务|[balde](http://sparkjava.com/)| 与SpringBoot类似的路由方式与控制翻转和依赖注入
ORM | [blade-anima](https://github.com/biezhi/anima)| 无需手写sql，直接方法操作数据库


## Python

### flask

flask

中文文档：

<http://docs.jinkan.org/docs/flask/>

英文文档：

<https://flask.palletsprojects.com/>


### FastAPI

官网 https://fastapi.tiangolo.com/zh

非常优秀的框架，采用携程性能可以与Go比肩



## 优秀的github总结

1. [java核心知识库](https://github.com/crossoverJie/JCSprout)
2. [Java学习+面试指南](https://github.com/Snailclimb/JavaGuide)
3. [Spring Boot 教程、技术栈示例代码](https://github.com/ityouknow/spring-boot-examples)
4. [秒杀系统设计与实现](https://github.com/qiurunze123/miaosha)
5. [大数据入门指南](https://github.com/heibaiying/BigData-Notes)
6. 