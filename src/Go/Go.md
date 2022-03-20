Go
===

阿里的一个面试官觉得Go的GC太弱了。

[【腾讯文档】go语言基础学习](https://docs.qq.com/doc/DSHZTaGZsTWpCVnN0)

go就是基于CSP原理实现的并发模型呀

CSP ，全称:Communicating Sequential Process ，翻译成中文是，通信顺序进程，最初于Tony Hoare的1977年的论文中被描述，影响了许多编程语言的设计。用于描述两个的ulinix并发的实体通过共享的通讯管道（channel)进行通信的 并发模型。在该模型中，channel 是比较重要的对象，它并不关注发送消息的实体，而只关心与发送消息时实体使用的channel

rosedb 是一个高性能、快速、内嵌的 k-v 数据库，支持多种数据结构，包含 String、List、Hash、Set、Sorted Set，接口名称风格和 Redis 类似。
https://github.com/roseduan/rosedb

### Eureka
Eureka作为微服务的注册中心，使用的是http通信，意味着跨语言的特性。那么Go可以实现一个eureka client即可注册到eureka里。

1. https://github.com/xuanbo/eureka-client
2. https://github.com/AntShakeTree/go-springcloud-euraka
1. https://github.com/biezhi/lets-golang


## Web框架

### gin

```
https://github.com/gin-gonic/gin
```

java和python的fastapi都要4-6秒处理3000请求。

go语言只要1秒处理3000请求。

练手项目 

* https://github.com/olongfen/gorm-gin-admin
* https://github.com/olongfen/user_admin

### goframe

### go-kit

### beego

## 数据库框架

### GORM

https://gorm.io/

这个框架应该还是比较流行的。非常优秀的数据库操作框架，基本上够用了。

### XORM

## 日志框架

### logrus

https://github.com/sirupsen/logrus

## 开发框架

### 热部署框架

#### air

https://github.com/cosmtrek/air

##### air安装

```
go get -u github.com/cosmtrek/air
```


## GUI开发

###  wails

https://wails.io/zh-Hans/
