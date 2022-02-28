Tomcat
======



## 1+N+M网络模型


![](assets/20220227_195223_tomcat.drawio.png)


把一个请求的处理分成了三个工序：监听、I/O、业务逻辑处理。1个监听线程负责监听客户端的Socket连接；N个I/O线程负责对Socket进行读写，N通常约等于CPU核心数；M个Worker线程负责对请求进行逻辑处理。

进一步来讲，Worker线程还可能被拆分成解码、业务逻辑计算、编码等环节，进一步提高并发度。