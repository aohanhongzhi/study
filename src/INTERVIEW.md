# Interview

## 面试基础知识

https://snailclimb.gitee.io/

## 简历

https://github.com/hua1995116/react-resume-site
https://resume.mdedit.online/editor/#/


## 面试前做准备

1. 了解应是公司及岗位信息
1. 系统化复习基础知识
1. 对原公司负责的项目进行梳理总结
1. 学习典型架构案例
1. 阅读常考考点源码
1. 针对性准备加分项

不要冷场,不要随意打断面试官.


编程语言，至少熟悉一门编程语言，了解编程语言的特性及基层原理，投简历不必特别在意语言。

线程是共享内存的。进程之间没必要加锁了。

熟悉了linux常用命令,grep sed.cut,head,xargs,awk
 

### 常见面试题目

[一个学渣的阿里之路](https://crossoverjie.top/2018/06/21/personal/Interview-experience/)
[中国WEB开发者](https://gitee.com/ironman1987/chinese-developer-roadmap)
写博客很重要，是自己研究深度的一种展示。
[中华石杉--互联网Java进阶面试训练营](https://gitee.com/shishan100/Java-Interview-Advanced)



## javaer

作为面试官，我只能根据候选人的回答来决定面试结果。不过，与人方便自己方便，我整理了一些面试中常考察的几个方向。

* 框架是重点，但别让人感觉你只会山寨别人的代码

* 别单纯看单机版的框架，适当了解些分布式

* 数据库方面，别就知道增删改查，得了解性能优化

* Java核心方面，围绕数据结构和性能优化准备面试题

* Linux方面，至少了解如何看日志排查问题

* 通读一些底层代码，作为加分项

* 一切的一切，把上述技能嵌入到你做过的项目里




## 我的简历内容

1. 具有微服务基本思想，熟悉SpringCloud家族各种组件的基本原理与使用。

1. 熟悉Spring家族的常用组件基本原理与源码

1. 熟练使用Python的Flask框架搭建后端。曾向Flask的github提交过源代码。

1. 熟悉Go语言的Beego框架使用。

1. 网页前端，熟悉VUE界面编写

1. 桌面应用熟悉JavaFx以及PYQT，都具备实战经验。

1. 移动应用，熟悉安卓开发，zxing二维码扫描，具备实战经验。

1. 专注与研究findbugs代码检测引擎，基于源码重构了整个架构。

1. 了解各种数据库，关系型，非关系型。开源的MySQL，postgresql，redis，mongodb，国产的TiDB，达梦等

1. 了解各种排序算法，红黑树，加密sha256算法。了解分布式一致性算法paxos。

### 项目经验

1. 简印（线上打印）

从大三开始立项，五次重构经历。目前基于SpringBoot+MyBatis+Redis（分页加载）+RabbitMQ+MySQL开发。桌面应用控制端采用JavaFX重构。管理员的后台使用Python Flask框架开发。项目被华东师大某社团看中，已被采购。目前运行在华东师大校园。

1. 石家庄翔翊货运代理有限公司财务管理信息系统

本科毕设，先实地调研，后独立研发交付。

1. 中国电信前置性代码安全云审计平台

一毕业就担任该平台的技术选型与架构设计，三个月阅读三十本左右相关书籍，成功选型微服务并编码实践。全平台使用SpringCloud家族各种组件。项目得到领导的认可，并难以相信这是本科生的能力。

1. 中国电信代码审计findbugs引擎研究与自研

在完成上述平台的同时，也独立研究findbugs引擎并修改，整个引擎代码量14万行。按照需求，大量修改findbugs源代码。

## 面试自我介绍：

从个人学习与成长经历，我符合一个优秀程序员的三个特质。
经常阅读著名框架源代码，熟悉优秀的编码风格。
经常阅读自己编写过的代码，发现之前的各种问题，不断修正。
不断重构自己的代码，架构不断升级，编码思想不断升华。



## 找工作非常重要的点
最好是内推，注意环境

### 注意事项
1. 团队氛围，团队环境。
1. leader是不是东北人。
1. 团队氛围很重要
1. 成长方式
1. 岗位角色定位，是骨干挑大梁，还是拧螺丝



# 面试常问知识点

我个人觉得看视频可能更有记忆

## mysql

1. [腾讯文档】史上最全的数据库面试题，不看后悔篇](https://docs.qq.com/doc/DSFhRcEJzUXpIZGlZ)
1. 索引啥时候会失效？索引原理至少弄明白。
1. Spring的事务注解啥时候会失效


## Redis

### 底层数据结构

https://zhuanlan.zhihu.com/p/193141635


### 缓存穿透，击穿，雪崩

https://zhuanlan.zhihu.com/p/346651831

### 分布式锁

1. [redis的分布式锁的实现工程](https://gitee.com/eric-tutorial/wig-demo)
1. redisson
1. redlock

### 缓存一致性
1. [如何保证Redis与数据库的数据一致性，看这一篇就够了](https://blog.csdn.net/gly1256288307/article/details/88739612)