Python
===

## 常用框架

### web框架

#### fastapi

> https://fastapi.tiangolo.com/zh/

有基于对象的反序列化参数接收，和序列化的json返回给前端。不建议折腾，在序列化方面处理不是很好，用起来很麻烦。

####  PyWebIO

交互式web应用，很适合少儿编程的入门

https://github.com/wang0618/PyWebIO


https://pywebio.readthedocs.io/zh_CN/latest/

#### vibora

> https://vibora.io/

#### sanic

哈罗单车就是选用这个框架的，这个框架的速度非常优秀。

https://sanic.readthedocs.io/en/latest/

https://sanicframework.org/zh/guide/

https://www.jianshu.com/p/636833c71c2a

参考demo

https://gitee.com/eric-tutorial/sanic_demo


####  moltenframework

> https://moltenframework.com/

#### flask

1. python的flask使用gunicorn部署，docker应用部署python flask
2. flask 的MVC模型构建
3. yaml配置文件设置

#### django

https://www.djangoproject.com/

#### Peewee

https://github.com/coleifer/peewee

http://docs.peewee-orm.com/en/latest/

一个Python的轻量级ORM框架，确实很简易

#### orator

一个Python的轻量级ORM框架，确实很简易

https://github.com/sdispater/orator



### 日志

##### loguru
使用非常不错，日志级别，颜色，行号
> https://loguru.readthedocs.io/en/stable/index.html

参考：

https://blog.csdn.net/adz41455/article/details/101648648

#####  34个最优秀好用的Python开源框架
https://zhuanlan.zhihu.com/p/58557451

https://pyre-check.org/

## Python



1. [将CSV文件导入数据库](https://gitee.com/cctv-eric/peewee-python)
1. [安装指导](http://docs.peewee-orm.com/en/latest/peewee/installation.html)
1. [快速开始](https://www.jianshu.com/p/16d1c330810c)
1. [peewee用法考察](https://www.jianshu.com/p/182ea382b99f)
1. [指定数据库表的名字](https://www.osgeo.cn/peewee/peewee/models.html#creating-model-tables)

    ```python
    class UserProfile(Model):
    class Meta:
        table_name = 'user_profile_tbl'
    ```

### awesome-python

1. https://github.com/vinta/awesome-python
1. http://jobbole.github.io/awesome-python-cn/

### 优秀的库

#### 哪些 Python 库让你相见恨晚？

知乎：https://www.zhihu.com/question/24590883

#### pandas-profiling

一行代码分析数据

#### Playhouse

这个库可以很方便的将对象转成dict（json），[它里面的model_to_dict和dict_to_model两个方法](https://www.cnblogs.com/fnng/p/6879779.html)。

* [官方文档](http://docs.peewee-orm.com/en/latest/)
* [中文文档](https://www.osgeo.cn/peewee/index.html)
