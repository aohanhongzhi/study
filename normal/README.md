# 常用配置文件

### logback.xml 

支持邮件发送需要依赖javax.mail。在SpringBoot里面可以依据环境名修改成 logback-test.xml，logback-dev.xml，logback-prod.xml等
gradle引入logback

```
        //日志
    // https://mvnrepository.com/artifact/org.slf4j/slf4j-api
    compile group: 'org.slf4j', name: 'slf4j-api', version: '1.7.26'
    // https://mvnrepository.com/artifact/ch.qos.logback/logback-core
    compile group: 'ch.qos.logback', name: 'logback-core', version: '1.2.3'
    // https://mvnrepository.com/artifact/ch.qos.logback/logback-classic
    compile group: 'ch.qos.logback', name: 'logback-classic', version: '1.2.3'
    compile group: 'javax.mail', name: 'mail', version: '1.4.7'

```

### log4j.properties

```
		<dependency>
			<groupId>commons-logging</groupId>
			<artifactId>commons-logging</artifactId>
			<version>1.2</version>
			<scope>provided</scope>
		</dependency>
		<dependency>
			<groupId>log4j</groupId>
			<artifactId>log4j</artifactId>
			<version>1.2.17</version>
			<scope>provided</scope>
		</dependency>
		<dependency>
			<groupId>org.apache.logging.log4j</groupId>
			<artifactId>log4j-core</artifactId>
			<version>2.11.1</version>
			<scope>provided</scope>
		</dependency>
		<dependency>
			<groupId>org.slf4j</groupId>
			<artifactId>slf4j-api</artifactId>
			<version>1.7.25</version>
			<scope>provided</scope>
		</dependency>
```

### log4j2.xml

不可以用与log4j，两者不兼容
```
    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <log4j.version>2.5</log4j.version>
    </properties>

  <dependencies>
    <!--   log日志配置 start   -->

    <!-- slf4j + log4j2 begin -->
    <dependency>
      <groupId>org.slf4j</groupId>
      <artifactId>slf4j-api</artifactId>
      <version>1.7.10</version>
      <optional>true</optional>
    </dependency>

    <dependency><!-- 桥接：告诉Slf4j使用Log4j2 -->
      <groupId>org.apache.logging.log4j</groupId>
      <artifactId>log4j-slf4j-impl</artifactId>
      <version>2.2</version>
      <!-- 下面必须设置成provided，否则会造成绑定多个的错误 -->
      <scope>provided</scope>
    </dependency>
    <dependency> <!-- 桥接：告诉commons logging使用Log4j2 -->
      <groupId>org.apache.logging.log4j</groupId>
      <artifactId>log4j-jcl</artifactId>
      <version>2.2</version>
      <scope>provided</scope>
    </dependency>

    <dependency>
      <groupId>org.apache.logging.log4j</groupId>
      <artifactId>log4j-api</artifactId>
      <version>${log4j.version}</version>
      <scope>provided</scope>
    </dependency>
    <dependency>
      <groupId>org.apache.logging.log4j</groupId>
      <artifactId>log4j-core</artifactId>
      <version>${log4j.version}</version>
      <scope>provided</scope>
    </dependency>


    <!-- https://mvnrepository.com/artifact/log4j/log4j -->
    <dependency>
      <groupId>log4j</groupId>
      <artifactId>log4j</artifactId>
      <version>1.2.17</version>
      <scope>provided</scope>
      <!-- 防止将log4j2依赖传递到其他模块，打包运行后，log4j2将自动禁用 <optional>true</optional> -->
    </dependency>
    <!-- log4j2 end -->

    <!--   log日志配置 end   -->
  </dependencies>
```

### rexdb.xml

各种数据库的配置，来自于官方

```
    //    数据库框架
    compile(group: 'org.rex-soft', name: 'rexdb', version: '1.0.4')
    compile(group: 'org.xerial', name: 'sqlite-jdbc', version: '3.27.2.1')
```

### ResourceUtil.java

java手动配置文件加载，加载一些不属于框架层次自动加载的文件。
