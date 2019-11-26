# SQL

##　框架

### Mybatis
1. ResultMap与ResultType
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

      使用
       resultMap="UserEntity"
    ```
1. 连表查询　，不设外键的查询方法

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