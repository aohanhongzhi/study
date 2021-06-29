Mysql
===
mysql的三个重点关注范围

## 索引

聚簇索引和非聚簇索引在不同引擎下的表现方式。

https://blog.csdn.net/qq_38829280/article/details/115087764


## 锁

全局锁，表锁，行锁

https://gitee.com/kailing/mysql-tx-lock-tests


## 事务

1. [数据库教程](https://github.com/dunwu/db-tutorial):[https://github.com/dunwu/db-tutorial](https://github.com/dunwu/db-tutorial)
1. 多个应用实例操作同一张表的时候需要加锁吗？
答：有一次闲着没事，尝试了5个实例对同一表格操作，插入了6000020条数据，全程插入耗费时间1个多小时，但是数量没有出错，至于数据有没有错误就难查了。之所以起了5个实例的时候，是因为第6个实例的时候就会抛出数据库连接异常，因为数据库连接池已经没有了，用光了导致无法使用了。
1. 如果设置为NOT NULL 那么必须设置默认值
1. [mysql删除操作其实是假删除](https://zhuanlan.zhihu.com/p/66336976)
1. [InnoDB怎么解决幻读的？](https://blog.csdn.net/qq_33330687/article/details/89004462)


### 高可用
1. [MySQL 同步复制及高可用方案总结](https://segmentfault.com/a/1190000022313462)


### 调试

[利用Zipkin追踪Mysql数据库调用链](https://segmentfault.com/a/1190000014751181)



## 拓展

Mysql满足不了的时候可能会用Doris，hive啥的。
