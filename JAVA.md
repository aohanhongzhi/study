# Java

由于Java基础知识比较多，代码编写套路多，因此独立成一个md文件。

## 设计模式
设计模式是编码的一种前人总结的经验，并不是Java独有的。之所以放在Java里面，是因为后期可能多半使用Java语言来实现。毕竟这个设计模式的具体应用还是与语言有很大的关系的。

### 工厂模式

直接上代码

```java
        package org.rex.db.datasource;
        import java.util.Properties;
        import javax.sql.DataSource;
        import org.rex.db.exception.DBException;
        import org.rex.db.logger.Logger;
        import org.rex.db.logger.LoggerFactory;
        import org.rex.db.util.DataSourceUtil;

        /**
        * DataSource factory.
        *
        * 抽象类，不可以实例化。
        * 
        * @version 1.0, 2016-02-14
        * @since Rexdb-1.0
        */
        public abstract class DataSourceFactory {
            
            private static final Logger LOGGER = LoggerFactory.getLogger(DataSourceFactory.class);
            
            private final Properties properties;
            
            private volatile DataSource dataSource;

            // TODO 不能实例化，那么构造器而定的public 参数等有啥意义？看到子类的super就知道了。这个可以用于super
            
            public DataSourceFactory(Properties properties) throws DBException{
                validateProperties(properties);
                this.properties = properties;
                
                if(LOGGER.isDebugEnabled())
                    LOGGER.debug("new datasource factory of properties {0} has been created.", DataSourceUtil.hiddenPassword(properties));
            }
            
            protected void validateProperties(Properties properties) throws DBException{
                if(properties == null || properties.size() == 0)
                    throw new DBException("DB-D0001");
            }
            
            public Properties getProperties() {
                return properties;
            }
            
            public synchronized DataSource getDataSource() throws DBException {
                if(dataSource == null) {
                    dataSource = createDataSource();
                    
                    LOGGER.info("new datasource[{0}] of datasource factory {1} has been created.", dataSource.hashCode(), DataSourceUtil.hiddenPassword(properties));
                }
                return dataSource;
            }
            
            public abstract DataSource createDataSource() throws DBException;
        }
```

从上面可以看出来这是一个抽象类，只有一个抽象方法`createDataSource()`。因为是抽象方法，没有具体的实现方式，只能交给子类来具体实现了，虽然是抽象方法，但是可以从`getDataSource()`中还是可以看到`createDataSource()`的使用。也就是说子类在实现`createDataSource()`的时候就可以调用父类的`getDataSource()`获取自己新建的东西了，之所以这么调用过来过去就是为了子类可以避免自己写很多乱七八糟的代码，工厂可以统一装配。

子类实现父类的构造器 super

```java
        package org.rex.db.datasource;

        import java.util.Properties;

        import javax.sql.DataSource;

        import org.rex.db.exception.DBException;

        /**
        * Simple DataSource Factory
        * 
        * @version 1.0, 2016-01-29
        * @since Rexdb-1.0
        */
        public class SimpleDataSourceFactory extends DataSourceFactory {
            
            public SimpleDataSourceFactory(Properties properties) throws DBException {
                // 这就是把父类(抽象类)实例化（实例化描述可能不太准确）
                super(properties);

            }

            @Override
            public DataSource createDataSource() throws DBException{
                return new SimpleDataSource(getProperties());
            }
        }


```

父类是不可以直接实例化的，但是子类正常，可以实例化。实例化之后直接调用父类的`getDataSource()`即可。 因为这个方法会去`createDataSource()`，而子类重写了这个方法。虽然感觉有点混乱，但是逻辑上还是很清晰的。