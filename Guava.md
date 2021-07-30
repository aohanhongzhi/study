Guava
===

# List
##  List分批
对于List需要插入数据库的时候，发现一次性插入太多，导致数据库传输的包太大直接失败，所以需要分批插入。Guava提供了一个方法，可以将一个很大的list拆分成多个小的List，然后再传输或者插入数据库。
```java
List<Model> bigList = 
List<List<Model>> smallLists = com.google.common.collect.Lists.partition(bigList, BATCH_NUM);
for (List<Model> smallList:smallLists){
   // smallList 就比较适合分批插入了。
}
 
```