为什么Mybatis 需要使用@Param 才能知道参数名称
===

参数名都写了为什么还需要`@Param`

原因
Mybatis 在代理对象时采用的是`InvocationHandler`
而`InvocationHandler`只传递参数的值
```java
    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable 
```
要想获取名称只能通过` method.getParameterAnnotations()`;
因此 Mypatis 要通过@Param才能知道参数名称

为什么method.getParameters();不行

因为 **在编译成class的时候这些参数就丧失了名称** ，没错你没有听错
可能是为了节省clss文件的大小和内存吧
在jdk8中 通过 在编译时添加 -parameters 可保留名称，然后通过getParameters 就能获取名称

maven中
```xml
    <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <configuration>
            <compilerArgs>
                <arg>-parameters</arg>
            </compilerArgs>
        </configuration>
    </plugin>

```
                    
                
            