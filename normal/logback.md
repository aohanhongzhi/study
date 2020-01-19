显示文件行数，点击可以跳转。
需要在application.properties中配置
```
# log config
logging.config=classpath:logback.xml
```
logback.xml文件内容如下
```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="false" scan="true" scanPeriod="1 seconds">

    <contextName>logback</contextName>
    <property name="log.path" value="/tmp/applogs/xxl-job/xxl-job-executor-sample-springboot.log"/>

    <appender name="console" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>%d{HH:mm:ss.SSS} %contextName [%thread] %highlight(%-5level) %yellow(at %class.%method) \(%file:%line\)  - %msg%n</pattern>
        </encoder>
    </appender>

    <appender name="file" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>${log.path}</file>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>${log.path}.%d{yyyy-MM-dd}.zip</fileNamePattern>
        </rollingPolicy>
        <encoder>
            <pattern>%date %level [%thread] %logger{36} [%file : %line] %msg%n
            </pattern>
        </encoder>
    </appender>

    <root level="info">
        <appender-ref ref="console"/>
        <appender-ref ref="file"/>
    </root>

</configuration>
```
效果如下图
![logback.png](https://upload-images.jianshu.io/upload_images/9710002-333e4bc951ee506f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

参考：https://logback.qos.ch/manual/layouts.html