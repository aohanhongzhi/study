JDK
===
## jdk的基础类

### java.util.Properties
这个类是一个继承自Hashtable

### java.util.Dictionary(abstract)
java里面与Python一样有字典结构

### java.util.Objects
null异常检测并且抛出
```java
        Objects.requireNonNull(inStream, "inStream parameter is null");
```
### java.net.URL
不仅经可以定位网络资源，也可以定位文件资源。



###  java.lang.ClassLoader	

双亲委派模型

![](./img/classloader.png)

目前最新的jdk将 ExtClassLoader改成了PlatformClassLoader。一般来说，类加载器可以找到类加载的位置，然后找到配置文件，读取配置文件。

```java
java.lang.ClassLoader.getResource(String name)
```

#### systemClassLoader
```java
	ClassLoader.getSystemClassLoader()
```

#### 当前线程类加载器研究
```java
	Thread.currentThread().getContextClassLoader()
```
为了更好的理解，我们可以查看源码。
看sun.misc.Launcher,它是一个java虚拟机的入口应用。
```java
	public class Launcher { 
	private static Launcher launcher = new Launcher(); 
	private static String bootClassPath = System.getProperty("sun.boot.class.path"); 
	public static Launcher getLauncher() { 
	return launcher; 
	} 
	private ClassLoader loader; 
	public Launcher() { 
	// Create the extension class loader ClassLoader extcl; 
	try { extcl = ExtClassLoader.getExtClassLoader(); } 
	catch (IOException e) { 
	throw new InternalError( "Could not create extension class loader", e); } 
	// Now create the class loader to use to launch the application 
	try { loader = AppClassLoader.getAppClassLoader(extcl); } 
	catch (IOException e) { 
	throw new InternalError( "Could not create application class loader", e); } 
	//设置AppClassLoader为线程上下文类加载器，这个文章后面部分讲解 
	Thread.currentThread().setContextClassLoader(loader); }

```

————————————————
版权声明：本文为CSDN博主「frank909」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/briblue/article/details/54973413

#### 当前类的加载器
```java
 	getClass().getClassLoader()
```
