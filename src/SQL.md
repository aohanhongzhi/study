# SQL

## 数据库

1. [OLTP与OLAP的关系是什么？](https://www.zhihu.com/question/24110442/answer/851671343)
1. https://github.com/questdb/questdb


## 框架

### Mybatis
1. ResultMap与ResultType。建议mybatis的xml文件配置下ResultMap，这样会更方便。
  * ResultType 直接指定包.类
    ```java
       resultType="hxy.cupb.entity.RoleEntity"
    ```
  * ResultMap 需要自己指定，更加灵活，适用于数据库字段与实体无法自动转换的情况。例如：
    ```xml
        <!--    &lt;!&ndash; 可根据自己的需求，是否要使用 &ndash;&gt;-->
        <resultMap type="UserEntity" id="UserEntity">
            <id column="id" property="id" jdbcType="INTEGER"/>
            <result column="username" property="userName" jdbcType="VARCHAR"/>
            <result column="password" property="passWord" jdbcType="VARCHAR"/>
        </resultMap>

        <!-- 使用 -->
        resultMap="UserEntity"
    ```
2. 连表查询，不设外键的查询方法。等值连接。

```xml
    <!-- 注意resultMap与resultType  -->
    <select id="getUserRolesByUid" parameterType="Integer" resultMap="UserEntity">
        select *
        from role_table r ,user_role_table ur
        where r.id=ur.rid and ur.uid = #{id}
    </select>
```

```sql
// 新建 role

CREATE TABLE `springboot`.`role_table` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(32) NOT NULL,
  `nameZh` VARCHAR(32) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_general_ci' NOT NULL,
  PRIMARY KEY (`id`));


// 新建 user_role_table , 角色与用户的关系表,但是不采用外键的形式

CREATE TABLE `springboot`.`user_role_table` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `uid` INT NOT NULL,
  `rid` INT NOT NULL,
  PRIMARY KEY (`id`));

```
3. 存在就更新，不存在就插入

```xml
<!-- 存在就跟新，不存在就新建 -->
<insert id="saveAndFlush" parameterType="com.ctcc.misas.entity.BugInfoCollectionEntity">
insert into misas.ct_buginfo(task_id,findbugs_bug_info,fortify_bug_info,codepecker_bug_info,merge_bug_info,engine_done)
values(#{taskId},#{findbugsBugInfo},#{fortifyBugInfo},#{codepeckerBugInfo},#{mergeBugInfo},#{engineDone}) ON DUPLICATE KEY UPDATE
      <if test="codepeckerBugInfo!=null">
      codepecker_bug_info =VALUES(codepecker_bug_info),
      </if>
      <if test="findbugsBugInfo!=null">
      findbugs_bug_info =VALUES(findbugs_bug_info),
      </if>
      <if test="fortifyBugInfo!=null">
      fortify_bug_info =VALUES(fortify_bug_info),
      </if>
      task_id = VALUES(task_id);
</insert>
```

4. 插入后返回自增主键

    1. 在Mybatis Mapper文件中添加属性 “useGeneratedKeys”和“keyProperty”，其中 keyProperty 是 Java 对象的属性名，而不是表格的字段名。

```xml
<insert id="insert" parameterType="Spares"    useGeneratedKeys="true" keyProperty="id">
    insert into system(name) values(#{name})
</insert> 
```

​			2.Mybatis 执行完插入语句后，自动将自增长值赋值给对象 systemBean 的属性id。因此，可通过 systemBean 对应的 getter 方法获取！

```java
int count = systemService.insert(systemBean);
int id = systemBean.getId(); //获取到的即为新插入记录的ID 
```

> 1.Mybatis Mapper 文件中，“useGeneratedKeys” 和 “keyProperty” 必须添加，而且 keyProperty 一定得和 java 对象的属性名称一致，而不是表格的字段名。

5. 


### Mybatis-plus

参考[mybatis-plus](mybatis-plus.md)

### RexDB

1. rexdb是通过下划线与Java对象中的驼峰式命名相呼应的，没有使用配置文件来一一对应映射。
2. 


### beetsql

官网：http://ibeetl.com/

### Mongo

**mango的中文名是“芒果”，它是一个极速分布式ORM框架。目前已有十多个大型线上项目在使用mango，在某一支付系统中，更是利用mango，承载了每秒12万的支付下单请求。**

官网：http://mango.jfaster.org/


### 数据库文档导出

https://github.com/pingfangushi/screw
