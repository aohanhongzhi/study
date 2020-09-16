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