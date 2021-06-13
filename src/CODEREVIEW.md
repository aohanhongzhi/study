代码审查
===

## 优秀的编码技巧

1. equals

对于两个可能为null的值比较
```java
Objects.equals(book.getAuthor(), this.author)
```

1. 获取hashCode

```java
Objects.hashCode(author)
```



通过这些别人的案例来看代码编写水平的严谨性。

1. [把HashMap改成了ConcurrentHashMap](https://github.com/lets-blade/blade/pull/400)
1. [利用LRU-修复可能存在OOM的问题](https://github.com/lets-blade/blade/pull/382)