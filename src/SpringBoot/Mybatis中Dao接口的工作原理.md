# Mybatis中Dao接口的工作原理

答：Dao接口，就是人们常说的Mapper接口，接口的全限名，就是映射文件中的namespace的值，接口的方法名，就是映射文件中MappedStatement的id值，接口方法内的参数，就是传递给sql的参数。Mapper接口是没有实现类的，当调用接口方法时，接口全限名+方法名拼接字符串作为key值，可唯一定位一个MappedStatement，举例：com.mybatis3.mappers.StudentDao.findStudentById，可以唯一找到namespace为com.mybatis3.mappers.StudentDao下面id = findStudentById的MappedStatement。在Mybatis中，每一个<select>、<insert>、<update>、<delete>标签，都会被解析为一个MappedStatement对象。

下面来看这个问题：
如何通过全限名+方法名来定位一个mapper的？



### 初始化

首先mybatis会把各种mapper映射进行初始化
对于mybatis与spring结合的项目，最开始是从SqlSessionFactoryBean开始
**SqlSessionFactoryBean类**

```java
 protected SqlSessionFactory buildSqlSessionFactory() throws IOException {
 
    //其他省略...
 
    if (xmlConfigBuilder != null) {
      try {
          //初始化mybatis config配置文件
        xmlConfigBuilder.parse();
        LOGGER.debug(() -> "Parsed configuration file: '" + this.configLocation + "'");
      } catch (Exception ex) {
        throw new NestedIOException("Failed to parse config resource: " + this.configLocation, ex);
      } finally {
        ErrorContext.instance().reset();
      }
    }
       //其他省略...
        try {
          XMLMapperBuilder xmlMapperBuilder = new XMLMapperBuilder(mapperLocation.getInputStream(),
              targetConfiguration, mapperLocation.toString(), targetConfiguration.getSqlFragments());
          //格式化mapper xml文件
          xmlMapperBuilder.parse();
        } catch (Exception e) {
          throw new NestedIOException("Failed to parse mapping resource: '" + mapperLocation + "'", e);
        } finally {
          ErrorContext.instance().reset();
        }
        LOGGER.debug(() -> "Parsed mapper file: '" + mapperLocation + "'");
 
    //其他省略...
    return this.sqlSessionFactoryBuilder.build(targetConfiguration);
  }
```

**XMLMapperBuilder类**

```java
 /**
   * 解析mapper映射配置文件
   */
  public void parse() {
    //判断是否已经加载过该映射文件
    if (!configuration.isResourceLoaded(resource)) {
      configurationElement(parser.evalNode("/mapper"));
      configuration.addLoadedResource(resource);
      //注册 Mapper 接 口
      bindMapperForNamespace();
    }
    //处理 configurationElement ()方法中解析失败的<resultMap>节点
    parsePendingResultMaps();
    //处理 configurationElement ()方法中 解析失败的< cache-ref>节点
    parsePendingCacheRefs();
    //处理 configurationElement ()方法中 解析失败的 SQL 语句节点
    parsePendingStatements();
  }
```

**bindMapperForNamespace()方法**

```java
//绑定Mapper接口
  private void bindMapperForNamespace() {
    //获取当前namespace名称
    String namespace = builderAssistant.getCurrentNamespace();
    if (namespace != null) {
      Class<?> boundType = null;
      try {
        boundType = Resources.classForName(namespace);
      } catch (ClassNotFoundException e) {
        //ignore, bound type is not required
      }
      if (boundType != null) {
        //如果还没有加载
        if (!configuration.hasMapper(boundType)) {
          // Spring may not know the real resource name so we set a flag
          // to prevent loading again this resource from the mapper interface
          // look at MapperAnnotationBuilder#loadXmlResource
          configuration.addLoadedResource("namespace:" + namespace);
          configuration.addMapper(boundType);
        }
      }
    }
  }
```

你从configuration.addMapper(boundType)进入，到最后你会发现，会以类全限定名为key，mapper代理作为value放入knownMappers 中

**MapperRegistry类**

```java

public <T> void addMapper(Class<T> type) {
      //....
      try {
        //放入knownMappers中
        knownMappers.put(type, new MapperProxyFactory<T>(type));
        // It's important that the type is added before the parser is run
        // otherwise the binding may automatically be attempted by the
        // mapper parser. If the type is already known, it won't try.
        MapperAnnotationBuilder parser = new MapperAnnotationBuilder(config, type);
        parser.parse();
        loadCompleted = true;
      } finally {
        if (!loadCompleted) {
          knownMappers.remove(type);
        }
      }
    }
  }
```

另外还有一个地方也会初始化，在初始化mybatis config配置文件的时候，可以看**XMLConfigBuilder.java**中mapperElement方法



### 定位

测试用例

```java
  @Test
  public void shouldSelectBlogWithPostsUsingSubSelect() throws Exception {
    SqlSession session = sqlSessionFactory.openSession();
    try {
      //getMapper返回一个MapperProxy对象
      BoundBlogMapper mapper = session.getMapper(BoundBlogMapper.class);
      Blog b = mapper.selectBlogWithPostsUsingSubSelect(1);
      assertEquals(1, b.getId());
      session.close();
      assertNotNull(b.getAuthor());
      assertEquals(101, b.getAuthor().getId());
      assertEquals("jim", b.getAuthor().getUsername());
      assertEquals("********", b.getAuthor().getPassword());
      assertEquals(2, b.getPosts().size());
    } finally {
      session.close();
    }
  }
```

MapperProxy类实现了InvocationHandler接口，代理类调用的时候会执行invoke方法
**MapperProxy类**

```java
@Override
  public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
    try {
      //如果目标方法继承自Object，则直接调用目标方法
      if (Object.class.equals(method.getDeclaringClass())) {
        return method.invoke(this, args);
      } else if (isDefaultMethod(method)) {
        //对jdk7以上版本，动态语言的支持
        return invokeDefaultMethod(proxy, method, args);
      }
    } catch (Throwable t) {
      throw ExceptionUtil.unwrapThrowable(t);
    }
    //从缓存中获取 MapperMethod对象，如果缓存中没有，则创建新的 MapperMethod对象并添加到缓存中
    final MapperMethod mapperMethod = cachedMapperMethod(method);
    //调用 MapperMethod.execute ()方法执行 SQL 语 句
    return mapperMethod.execute(sqlSession, args);
  }
```

看 cachedMapperMethod(method)方法

```java
 private MapperMethod cachedMapperMethod(Method method) {
    MapperMethod mapperMethod = methodCache.get(method);
    if (mapperMethod == null) {
      创建 MapperMethod 对象 ， 并添加到 methodCache 集合 中缓存
      mapperMethod = new MapperMethod(mapperInterface, method, sqlSession.getConfiguration());
      methodCache.put(method, mapperMethod);
    }
    return mapperMethod;
  }
```

MapperMethod 中封装了 Mapper接口中对应方法的信息，以及对应 SQL 语句的信息

```java
  public MapperMethod(Class<?> mapperInterface, Method method, Configuration config) {
    //记录了 SQL语句的名称和类型
    this.command = new SqlCommand(config, mapperInterface, method);
    //Mapper 接 口中对应方法的相关信息
    this.method = new MethodSignature(config, mapperInterface, method);
  }
```

看SqlCommand -->resolveMappedStatement你会发现，sql语句的名称是由：Mapper 接口的名称与对应的方法名称组成的