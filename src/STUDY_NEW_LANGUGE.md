如何快速掌握一门新的语言
===


1. 基础数据结构
    * 动态数组型: 例如java中的ArrayList，Python中的列表，Go语言中的切片
    * 键值对型：Java中的HashMap，Python中的字典，Go语言中的Map
1. 函数或方法的定义与调用，包导入，作用域
    * 函数或者方法的定义，对于各种语言有点区别，需要用心替换。但是基本上都有入参和出参。
1. 面向对象理解，封装，继承，多态，组合等


# 基础数据结构

## Java
java的collection是java官方定义的，非常丰富。但是用的最多的应该是下面两种
### HashMap
```java
HashMap hashMap = new HashMap()
hashMap.put(key,value)

```

### ArrayList

```java
ArrayList arrayList =  new ArrayList()
arrayList.add("ok")
```

## Go

### 字典　map

大概结构
```go
map[key的类型]value类型
```
例如
```go
var userMap = make(map[int]string)
userMap[2019011922]="eric"
```

### 切片 slice

```go
 newSlice = append(oldSilce,value)
```

## Python

### 字典
```python

{key:value}

```
添加
```python
dictname[key] = value
```
### 列表

```python
list = [a,b,c]

list.append(d)

list.remove(2)
```



折腾了这么长时间的语言了。也折腾了个遍，发现语言并不是核心。掌握很多的语言并不像现实世界中掌握了多门交流的语言那么有意义。掌握多门计算机语言并没有太多的意义。
现在基本上确定了企业级开发采用Java，demo级别项目采用Golang，脚本采用Python。其他的语言也是看情况使用。

项目级别 | 采用语言
--- | ---
 企业级开发 | Java
 demo | Golang
 脚本 | Python
