// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/home/eric/.npm/_npx/8349/lib/node_modules/dumi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../../../../.npm/_npx/8349/lib/node_modules/dumi/node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"知识图谱","meta":{}},{"path":"/admin","title":"TEMPLATE","meta":{}},{"path":"/algorithm","title":"ALGORITHM","meta":{}},{"path":"/architecture","title":"ARCHITECTURE","meta":{}},{"path":"/awesomeblog","title":"AWESOMEBLOG","meta":{}},{"path":"/deepin","title":"Deepin","meta":{}},{"title":"Devops","path":"/devops","meta":{},"children":[{"path":"/devops/git 在团队中的最佳实践--如何正确使用git flow","title":"Git 在团队中的最佳实践--如何正确使用Git Flow","meta":{}},{"path":"/devops/电脑卡顿解决办法","title":"查看后台常驻进程","meta":{}}]},{"path":"/docker","title":"Docker","meta":{}},{"path":"/explore","title":"EXPLORE","meta":{}},{"path":"/go","title":"Go","meta":{}},{"path":"/interview","title":"Interview","meta":{}},{"path":"/java","title":"Java","meta":{}},{"path":"/jdk","title":"JDK","meta":{}},{"path":"/kotlin","title":"Kotlin","meta":{}},{"path":"/linux","title":"LINUX","meta":{}},{"path":"/mybatis-plus","title":"mybatis-plus学习","meta":{}},{"path":"/mysql","title":"Mysql","meta":{}},{"title":"Normal","path":"/normal","meta":{},"children":[{"path":"/normal","title":"常用配置文件","meta":{}},{"path":"/normal/bashrc","title":"Bashrc","meta":{}},{"path":"/normal/logback","title":"Logback","meta":{}},{"path":"/normal/快捷键","title":"idea快捷键","meta":{}}]},{"path":"/plan","title":"Plan","meta":{}},{"path":"/program","title":"编程技巧","meta":{}},{"path":"/programming","title":"为往圣继绝学","meta":{}},{"path":"/python","title":"常用框架","meta":{}},{"title":"Security","path":"/security","meta":{},"children":[{"path":"/security/rsa","title":"带你彻底理解RSA算法原理","meta":{}}]},{"path":"/spring-boot","title":"SpringBoot","meta":{}},{"path":"/sql","title":"SQL","meta":{}},{"path":"/study","title":"我学习过的知识","meta":{}},{"path":"/study_new_languge","title":"如何快速掌握一门新的语言","meta":{}},{"path":"/tool","title":"Tool","meta":{}},{"path":"/vue","title":"Vue","meta":{}},{"path":"/代码管理","title":"代码版本控制","meta":{}}]}},"locales":[],"navs":{},"title":"dumi","mode":"doc"},
      ...props,
    }),
    "routes": [
      {
        "path": "/admin",
        "component": require('../../ADMIN.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/ADMIN.md",
          "updatedTime": 1602318656000,
          "slugs": [
            {
              "depth": 1,
              "value": "TEMPLATE",
              "heading": "template"
            }
          ],
          "title": "TEMPLATE"
        },
        "title": "TEMPLATE"
      },
      {
        "path": "/algorithm",
        "component": require('../../ALGORITHM.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/ALGORITHM.md",
          "updatedTime": 1602318656000,
          "slugs": [
            {
              "depth": 1,
              "value": "ALGORITHM",
              "heading": "algorithm"
            },
            {
              "depth": 3,
              "value": "一致性Hash算法",
              "heading": "一致性hash算法"
            },
            {
              "depth": 3,
              "value": "深度优先遍历",
              "heading": "深度优先遍历"
            },
            {
              "depth": 3,
              "value": "广度优先遍历",
              "heading": "广度优先遍历"
            },
            {
              "depth": 3,
              "value": "贪心算法",
              "heading": "贪心算法"
            },
            {
              "depth": 3,
              "value": "动态规划",
              "heading": "动态规划"
            }
          ],
          "title": "ALGORITHM"
        },
        "title": "ALGORITHM"
      },
      {
        "path": "/architecture",
        "component": require('../../ARCHITECTURE.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/ARCHITECTURE.md",
          "updatedTime": 1603088708000,
          "slugs": [
            {
              "depth": 1,
              "value": "ARCHITECTURE",
              "heading": "architecture"
            },
            {
              "depth": 2,
              "value": "微服务架构",
              "heading": "微服务架构"
            },
            {
              "depth": 3,
              "value": "微服务架构设计原则",
              "heading": "微服务架构设计原则"
            },
            {
              "depth": 4,
              "value": "业务架构",
              "heading": "业务架构"
            },
            {
              "depth": 4,
              "value": "逻辑架构",
              "heading": "逻辑架构"
            },
            {
              "depth": 5,
              "value": "聚合微服务设计模式",
              "heading": "聚合微服务设计模式"
            },
            {
              "depth": 5,
              "value": "代理微服务设计模式",
              "heading": "代理微服务设计模式"
            },
            {
              "depth": 5,
              "value": "链式微服务设计模式",
              "heading": "链式微服务设计模式"
            },
            {
              "depth": 5,
              "value": "分支微服务设计模式",
              "heading": "分支微服务设计模式"
            },
            {
              "depth": 4,
              "value": "技术架构",
              "heading": "技术架构"
            },
            {
              "depth": 4,
              "value": "基础架构",
              "heading": "基础架构"
            },
            {
              "depth": 4,
              "value": "微服务交付流程",
              "heading": "微服务交付流程"
            },
            {
              "depth": 2,
              "value": "企业开发技术",
              "heading": "企业开发技术"
            },
            {
              "depth": 3,
              "value": "容器",
              "heading": "容器"
            },
            {
              "depth": 4,
              "value": "Docker",
              "heading": "docker"
            },
            {
              "depth": 4,
              "value": "Rancher",
              "heading": "rancher"
            },
            {
              "depth": 3,
              "value": "服务注册与发现",
              "heading": "服务注册与发现"
            },
            {
              "depth": 4,
              "value": "ZooKeeper",
              "heading": "zookeeper"
            },
            {
              "depth": 4,
              "value": "SpringCloud Eureka",
              "heading": "springcloud-eureka"
            },
            {
              "depth": 4,
              "value": "Consul",
              "heading": "consul"
            },
            {
              "depth": 4,
              "value": "Nacos",
              "heading": "nacos"
            },
            {
              "depth": 3,
              "value": "日志",
              "heading": "日志"
            },
            {
              "depth": 4,
              "value": "ELK",
              "heading": "elk"
            },
            {
              "depth": 4,
              "value": "链路分析 minbox-logging",
              "heading": "链路分析-minbox-logging"
            },
            {
              "depth": 3,
              "value": "tlog",
              "heading": "tlog"
            },
            {
              "depth": 3,
              "value": "监控",
              "heading": "监控"
            },
            {
              "depth": 4,
              "value": "WGCLOUD",
              "heading": "wgcloud"
            },
            {
              "depth": 4,
              "value": "夜莺",
              "heading": "夜莺"
            },
            {
              "depth": 3,
              "value": "运维",
              "heading": "运维"
            },
            {
              "depth": 4,
              "value": "log-pilot",
              "heading": "log-pilot"
            },
            {
              "depth": 4,
              "value": "Splunk",
              "heading": "splunk"
            },
            {
              "depth": 4,
              "value": "Zabbix",
              "heading": "zabbix"
            },
            {
              "depth": 3,
              "value": "配置中心",
              "heading": "配置中心"
            },
            {
              "depth": 4,
              "value": "Apollo (推荐)",
              "heading": "apollo-推荐"
            },
            {
              "depth": 4,
              "value": "Spring Cloud Config + Git (小型系统推荐)",
              "heading": "spring-cloud-config--git-小型系统推荐"
            },
            {
              "depth": 3,
              "value": "消息中间件",
              "heading": "消息中间件"
            },
            {
              "depth": 4,
              "value": "RabbitMQ",
              "heading": "rabbitmq"
            },
            {
              "depth": 4,
              "value": "kafka",
              "heading": "kafka"
            },
            {
              "depth": 4,
              "value": "RocketMQ",
              "heading": "rocketmq"
            },
            {
              "depth": 3,
              "value": "事务管理中间件",
              "heading": "事务管理中间件"
            },
            {
              "depth": 4,
              "value": "Seata",
              "heading": "seata"
            },
            {
              "depth": 3,
              "value": "分布式文件存储",
              "heading": "分布式文件存储"
            },
            {
              "depth": 4,
              "value": "FastDFS",
              "heading": "fastdfs"
            },
            {
              "depth": 3,
              "value": "数据库",
              "heading": "数据库"
            },
            {
              "depth": 4,
              "value": "数据库相关中间件",
              "heading": "数据库相关中间件"
            },
            {
              "depth": 5,
              "value": "分布式MySQL工具集Vitess",
              "heading": "分布式mysql工具集vitess"
            },
            {
              "depth": 4,
              "value": "MySQL",
              "heading": "mysql"
            },
            {
              "depth": 4,
              "value": "MariaDB",
              "heading": "mariadb"
            },
            {
              "depth": 4,
              "value": "Postgresql",
              "heading": "postgresql"
            },
            {
              "depth": 4,
              "value": "TiDB",
              "heading": "tidb"
            },
            {
              "depth": 4,
              "value": "TBase",
              "heading": "tbase"
            },
            {
              "depth": 3,
              "value": "网关API",
              "heading": "网关api"
            },
            {
              "depth": 4,
              "value": "OpenResty",
              "heading": "openresty"
            },
            {
              "depth": 4,
              "value": "Zuul",
              "heading": "zuul"
            },
            {
              "depth": 4,
              "value": "Nginx",
              "heading": "nginx"
            },
            {
              "depth": 4,
              "value": "tengine",
              "heading": "tengine"
            },
            {
              "depth": 4,
              "value": "HAProxy",
              "heading": "haproxy"
            },
            {
              "depth": 3,
              "value": "代码审查",
              "heading": "代码审查"
            },
            {
              "depth": 4,
              "value": "sonarqube",
              "heading": "sonarqube"
            },
            {
              "depth": 4,
              "value": "阿里巴巴规范插件",
              "heading": "阿里巴巴规范插件"
            },
            {
              "depth": 3,
              "value": "项目构建工具",
              "heading": "项目构建工具"
            },
            {
              "depth": 4,
              "value": "Gradle",
              "heading": "gradle"
            },
            {
              "depth": 4,
              "value": "Maven",
              "heading": "maven"
            },
            {
              "depth": 4,
              "value": "Buildr",
              "heading": "buildr"
            },
            {
              "depth": 2,
              "value": "Java技术栈",
              "heading": "java技术栈"
            },
            {
              "depth": 3,
              "value": "ORM中间件",
              "heading": "orm中间件"
            },
            {
              "depth": 3,
              "value": "常用中间件",
              "heading": "常用中间件"
            },
            {
              "depth": 3,
              "value": "企业级应用开发技术栈",
              "heading": "企业级应用开发技术栈"
            },
            {
              "depth": 3,
              "value": "SpringCloud家族",
              "heading": "springcloud家族"
            },
            {
              "depth": 5,
              "value": "主角应用",
              "heading": "主角应用"
            },
            {
              "depth": 5,
              "value": "配角应用",
              "heading": "配角应用"
            },
            {
              "depth": 5,
              "value": "专业应用",
              "heading": "专业应用"
            },
            {
              "depth": 5,
              "value": "等待研究的中间件",
              "heading": "等待研究的中间件"
            },
            {
              "depth": 3,
              "value": "Dubbox + ZooKeeper",
              "heading": "dubbox--zookeeper"
            },
            {
              "depth": 3,
              "value": "Micronaut新一代的微服务框架",
              "heading": "micronaut新一代的微服务框架"
            },
            {
              "depth": 3,
              "value": "技术栈1",
              "heading": "技术栈1"
            },
            {
              "depth": 3,
              "value": "技术栈2",
              "heading": "技术栈2"
            },
            {
              "depth": 2,
              "value": "Python",
              "heading": "python"
            },
            {
              "depth": 3,
              "value": "flask",
              "heading": "flask"
            },
            {
              "depth": 3,
              "value": "FastAPI",
              "heading": "fastapi"
            },
            {
              "depth": 2,
              "value": "优秀的github总结",
              "heading": "优秀的github总结"
            }
          ],
          "title": "ARCHITECTURE"
        },
        "title": "ARCHITECTURE"
      },
      {
        "path": "/awesomeblog",
        "component": require('../../AWESOMEBLOG.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/AWESOMEBLOG.md",
          "updatedTime": 1602159523000,
          "slugs": [],
          "title": "AWESOMEBLOG"
        },
        "title": "AWESOMEBLOG"
      },
      {
        "path": "/deepin",
        "component": require('../../DEEPIN.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/DEEPIN.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 1,
              "value": "Deepin",
              "heading": "deepin"
            }
          ],
          "title": "Deepin"
        },
        "title": "Deepin"
      },
      {
        "path": "/docker",
        "component": require('../../DOCKER.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/DOCKER.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 1,
              "value": "Docker",
              "heading": "docker"
            },
            {
              "depth": 3,
              "value": "SpringBoot应用",
              "heading": "springboot应用"
            },
            {
              "depth": 4,
              "value": "构建推送到docker仓库",
              "heading": "构建推送到docker仓库"
            }
          ],
          "title": "Docker"
        },
        "title": "Docker"
      },
      {
        "path": "/explore",
        "component": require('../../EXPLORE.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/EXPLORE.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 1,
              "value": "EXPLORE",
              "heading": "explore"
            }
          ],
          "title": "EXPLORE"
        },
        "title": "EXPLORE"
      },
      {
        "path": "/go",
        "component": require('../../Go.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Go.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 1,
              "value": "Go",
              "heading": "go"
            },
            {
              "depth": 2,
              "value": "Web框架",
              "heading": "web框架"
            },
            {
              "depth": 3,
              "value": "gin",
              "heading": "gin"
            },
            {
              "depth": 3,
              "value": "goframe",
              "heading": "goframe"
            },
            {
              "depth": 3,
              "value": "go-kit",
              "heading": "go-kit"
            },
            {
              "depth": 3,
              "value": "beego",
              "heading": "beego"
            },
            {
              "depth": 3,
              "value": "GORM",
              "heading": "gorm"
            },
            {
              "depth": 3,
              "value": "XORM",
              "heading": "xorm"
            }
          ],
          "title": "Go"
        },
        "title": "Go"
      },
      {
        "path": "/interview",
        "component": require('../../INTERVIEW.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/INTERVIEW.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 1,
              "value": "Interview",
              "heading": "interview"
            },
            {
              "depth": 3,
              "value": "常见面试题目",
              "heading": "常见面试题目"
            },
            {
              "depth": 2,
              "value": "javaer",
              "heading": "javaer"
            },
            {
              "depth": 2,
              "value": "mysql",
              "heading": "mysql"
            },
            {
              "depth": 2,
              "value": "我的简历内容",
              "heading": "我的简历内容"
            },
            {
              "depth": 3,
              "value": "项目经验",
              "heading": "项目经验"
            },
            {
              "depth": 2,
              "value": "面试自我介绍：",
              "heading": "面试自我介绍："
            }
          ],
          "title": "Interview"
        },
        "title": "Interview"
      },
      {
        "path": "/java",
        "component": require('../../JAVA.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/JAVA.md",
          "updatedTime": 1602463665000,
          "slugs": [
            {
              "depth": 1,
              "value": "Java",
              "heading": "java"
            },
            {
              "depth": 2,
              "value": "基础知识",
              "heading": "基础知识"
            },
            {
              "depth": 3,
              "value": "程序入口",
              "heading": "程序入口"
            },
            {
              "depth": 3,
              "value": "volatile",
              "heading": "volatile"
            },
            {
              "depth": 2,
              "value": "数据结构",
              "heading": "数据结构"
            },
            {
              "depth": 3,
              "value": "HashMap",
              "heading": "hashmap"
            },
            {
              "depth": 3,
              "value": "Stream",
              "heading": "stream"
            },
            {
              "depth": 3,
              "value": "Vector",
              "heading": "vector"
            },
            {
              "depth": 3,
              "value": "接口",
              "heading": "接口"
            },
            {
              "depth": 3,
              "value": "FastList",
              "heading": "fastlist"
            },
            {
              "depth": 2,
              "value": "github&gitee",
              "heading": "githubgitee"
            },
            {
              "depth": 2,
              "value": "JVM",
              "heading": "jvm"
            },
            {
              "depth": 3,
              "value": "Java常用命令",
              "heading": "java常用命令"
            },
            {
              "depth": 2,
              "value": "编码基础",
              "heading": "编码基础"
            },
            {
              "depth": 3,
              "value": "lombok",
              "heading": "lombok"
            },
            {
              "depth": 3,
              "value": "接口与匿名内部类",
              "heading": "接口与匿名内部类"
            },
            {
              "depth": 2,
              "value": "设计模式",
              "heading": "设计模式"
            },
            {
              "depth": 3,
              "value": "单例模式",
              "heading": "单例模式"
            },
            {
              "depth": 4,
              "value": "双重加锁的饿汉式",
              "heading": "双重加锁的饿汉式"
            },
            {
              "depth": 3,
              "value": "工厂模式",
              "heading": "工厂模式"
            },
            {
              "depth": 2,
              "value": "常用库",
              "heading": "常用库"
            },
            {
              "depth": 3,
              "value": "okio",
              "heading": "okio"
            },
            {
              "depth": 3,
              "value": "Commons-io",
              "heading": "commons-io"
            },
            {
              "depth": 3,
              "value": "guava",
              "heading": "guava"
            },
            {
              "depth": 3,
              "value": "json库",
              "heading": "json库"
            },
            {
              "depth": 4,
              "value": "fastjson",
              "heading": "fastjson"
            },
            {
              "depth": 4,
              "value": "jackson",
              "heading": "jackson"
            },
            {
              "depth": 3,
              "value": "网络客户端",
              "heading": "网络客户端"
            },
            {
              "depth": 4,
              "value": "okhttps",
              "heading": "okhttps"
            },
            {
              "depth": 2,
              "value": "编码风格",
              "heading": "编码风格"
            },
            {
              "depth": 2,
              "value": "Java技术栈开发的技术点",
              "heading": "java技术栈开发的技术点"
            },
            {
              "depth": 3,
              "value": "代码方面",
              "heading": "代码方面"
            },
            {
              "depth": 3,
              "value": "使用方面",
              "heading": "使用方面"
            }
          ],
          "title": "Java"
        },
        "title": "Java"
      },
      {
        "path": "/jdk",
        "component": require('../../JDK.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/JDK.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 1,
              "value": "JDK",
              "heading": "jdk"
            },
            {
              "depth": 2,
              "value": "jdk的基础类",
              "heading": "jdk的基础类"
            },
            {
              "depth": 3,
              "value": "java.util.Properties",
              "heading": "javautilproperties"
            },
            {
              "depth": 3,
              "value": "java.util.Dictionary(abstract)",
              "heading": "javautildictionaryabstract"
            },
            {
              "depth": 3,
              "value": "java.util.Objects",
              "heading": "javautilobjects"
            },
            {
              "depth": 3,
              "value": "java.net.URL",
              "heading": "javaneturl"
            },
            {
              "depth": 3,
              "value": "java.lang.ClassLoader",
              "heading": "javalangclassloader"
            },
            {
              "depth": 4,
              "value": "systemClassLoader",
              "heading": "systemclassloader"
            },
            {
              "depth": 4,
              "value": "当前线程类加载器研究",
              "heading": "当前线程类加载器研究"
            },
            {
              "depth": 4,
              "value": "当前类的加载器",
              "heading": "当前类的加载器"
            },
            {
              "depth": 3,
              "value": "jvm参数",
              "heading": "jvm参数"
            }
          ],
          "title": "JDK"
        },
        "title": "JDK"
      },
      {
        "path": "/kotlin",
        "component": require('../../KOTLIN.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/KOTLIN.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 1,
              "value": "Kotlin",
              "heading": "kotlin"
            },
            {
              "depth": 2,
              "value": "Ktorm",
              "heading": "ktorm"
            }
          ],
          "title": "Kotlin"
        },
        "title": "Kotlin"
      },
      {
        "path": "/linux",
        "component": require('../../LINUX.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/LINUX.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 1,
              "value": "LINUX",
              "heading": "linux"
            },
            {
              "depth": 2,
              "value": "网络",
              "heading": "网络"
            },
            {
              "depth": 3,
              "value": "netstat",
              "heading": "netstat"
            },
            {
              "depth": 3,
              "value": "常用命令",
              "heading": "常用命令"
            }
          ],
          "title": "LINUX"
        },
        "title": "LINUX"
      },
      {
        "path": "/mysql",
        "component": require('../../MYSQL.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/MYSQL.md",
          "updatedTime": 1602318725000,
          "slugs": [
            {
              "depth": 1,
              "value": "Mysql",
              "heading": "mysql"
            },
            {
              "depth": 3,
              "value": "高可用",
              "heading": "高可用"
            },
            {
              "depth": 3,
              "value": "调试",
              "heading": "调试"
            }
          ],
          "title": "Mysql"
        },
        "title": "Mysql"
      },
      {
        "path": "/plan",
        "component": require('../../PLAN.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/PLAN.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 1,
              "value": "Plan",
              "heading": "plan"
            },
            {
              "depth": 2,
              "value": "重要计划",
              "heading": "重要计划"
            },
            {
              "depth": 2,
              "value": "安排计划",
              "heading": "安排计划"
            }
          ],
          "title": "Plan"
        },
        "title": "Plan"
      },
      {
        "path": "/python",
        "component": require('../../PYTHON.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/PYTHON.md",
          "updatedTime": 1602463665000,
          "slugs": [
            {
              "depth": 2,
              "value": "常用框架",
              "heading": "常用框架"
            },
            {
              "depth": 3,
              "value": "web框架",
              "heading": "web框架"
            },
            {
              "depth": 4,
              "value": "fastapi",
              "heading": "fastapi"
            },
            {
              "depth": 4,
              "value": "vibora",
              "heading": "vibora"
            },
            {
              "depth": 4,
              "value": "sanic",
              "heading": "sanic"
            },
            {
              "depth": 4,
              "value": "moltenframework",
              "heading": "moltenframework"
            },
            {
              "depth": 4,
              "value": "flask",
              "heading": "flask"
            },
            {
              "depth": 4,
              "value": "django",
              "heading": "django"
            },
            {
              "depth": 4,
              "value": "Peewee",
              "heading": "peewee"
            },
            {
              "depth": 4,
              "value": "orator",
              "heading": "orator"
            },
            {
              "depth": 3,
              "value": "日志",
              "heading": "日志"
            },
            {
              "depth": 5,
              "value": "loguru",
              "heading": "loguru"
            },
            {
              "depth": 5,
              "value": "34个最优秀好用的Python开源框架",
              "heading": "34个最优秀好用的python开源框架"
            },
            {
              "depth": 2,
              "value": "Python",
              "heading": "python"
            }
          ],
          "title": "常用框架"
        },
        "title": "常用框架"
      },
      {
        "path": "/program",
        "component": require('../../Program.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Program.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 1,
              "value": "编程技巧",
              "heading": "编程技巧"
            },
            {
              "depth": 2,
              "value": "编码基本操作",
              "heading": "编码基本操作"
            },
            {
              "depth": 3,
              "value": "线上部署之前",
              "heading": "线上部署之前"
            }
          ],
          "title": "编程技巧"
        },
        "title": "编程技巧"
      },
      {
        "path": "/programming",
        "component": require('../../Programming.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Programming.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 1,
              "value": "为往圣继绝学",
              "heading": "为往圣继绝学"
            },
            {
              "depth": 1,
              "value": "编程思想",
              "heading": "编程思想"
            },
            {
              "depth": 1,
              "value": "开发规范",
              "heading": "开发规范"
            },
            {
              "depth": 2,
              "value": "基础常识",
              "heading": "基础常识"
            },
            {
              "depth": 2,
              "value": "流",
              "heading": "流"
            },
            {
              "depth": 2,
              "value": "ORM层操作",
              "heading": "orm层操作"
            },
            {
              "depth": 2,
              "value": "异常",
              "heading": "异常"
            },
            {
              "depth": 2,
              "value": "工具类",
              "heading": "工具类"
            },
            {
              "depth": 2,
              "value": "DAO层",
              "heading": "dao层"
            },
            {
              "depth": 2,
              "value": "Service层",
              "heading": "service层"
            },
            {
              "depth": 2,
              "value": "Controller层",
              "heading": "controller层"
            },
            {
              "depth": 1,
              "value": "学习资料",
              "heading": "学习资料"
            }
          ],
          "title": "为往圣继绝学"
        },
        "title": "为往圣继绝学"
      },
      {
        "path": "/",
        "component": require('../../README.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/README.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 1,
              "value": "知识图谱",
              "heading": "知识图谱"
            }
          ],
          "title": "知识图谱"
        },
        "title": "知识图谱"
      },
      {
        "path": "/security",
        "component": require('../../SECURITY.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/SECURITY.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 1,
              "value": "SECURITY",
              "heading": "security"
            },
            {
              "depth": 2,
              "value": "Tool",
              "heading": "tool"
            }
          ],
          "title": "SECURITY"
        },
        "title": "SECURITY"
      },
      {
        "path": "/sql",
        "component": require('../../SQL.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/SQL.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 1,
              "value": "SQL",
              "heading": "sql"
            },
            {
              "depth": 3,
              "value": "Mybatis",
              "heading": "mybatis"
            },
            {
              "depth": 3,
              "value": "Mybatis-plus",
              "heading": "mybatis-plus"
            },
            {
              "depth": 3,
              "value": "RexDB",
              "heading": "rexdb"
            },
            {
              "depth": 3,
              "value": "beetsql",
              "heading": "beetsql"
            },
            {
              "depth": 3,
              "value": "Mongo",
              "heading": "mongo"
            }
          ],
          "title": "SQL"
        },
        "title": "SQL"
      },
      {
        "path": "/study",
        "component": require('../../STUDY.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/STUDY.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 1,
              "value": "我学习过的知识",
              "heading": "我学习过的知识"
            },
            {
              "depth": 2,
              "value": "语言",
              "heading": "语言"
            },
            {
              "depth": 2,
              "value": "Java",
              "heading": "java"
            },
            {
              "depth": 3,
              "value": "jdk",
              "heading": "jdk"
            },
            {
              "depth": 3,
              "value": "基础",
              "heading": "基础"
            },
            {
              "depth": 3,
              "value": "Spring",
              "heading": "spring"
            },
            {
              "depth": 3,
              "value": "MyCat",
              "heading": "mycat"
            },
            {
              "depth": 3,
              "value": "Mybatis",
              "heading": "mybatis"
            },
            {
              "depth": 3,
              "value": "logback",
              "heading": "logback"
            },
            {
              "depth": 3,
              "value": "log4j & log4j2",
              "heading": "log4j--log4j2"
            },
            {
              "depth": 3,
              "value": "rexdb",
              "heading": "rexdb"
            },
            {
              "depth": 3,
              "value": "mail",
              "heading": "mail"
            },
            {
              "depth": 3,
              "value": "security",
              "heading": "security"
            },
            {
              "depth": 3,
              "value": "sparkjava",
              "heading": "sparkjava"
            },
            {
              "depth": 3,
              "value": "Netty",
              "heading": "netty"
            },
            {
              "depth": 3,
              "value": "javafx",
              "heading": "javafx"
            },
            {
              "depth": 3,
              "value": "java-di",
              "heading": "java-di"
            },
            {
              "depth": 3,
              "value": "ActFramework",
              "heading": "actframework"
            },
            {
              "depth": 3,
              "value": "其他",
              "heading": "其他"
            },
            {
              "depth": 2,
              "value": "https://gitee.com/lin-mt/effective-java-third-edition",
              "heading": "httpsgiteecomlin-mteffective-java-third-edition"
            },
            {
              "depth": 2,
              "value": "Python",
              "heading": "python"
            },
            {
              "depth": 3,
              "value": "flask",
              "heading": "flask"
            },
            {
              "depth": 3,
              "value": "django",
              "heading": "django"
            },
            {
              "depth": 3,
              "value": "Peewee",
              "heading": "peewee"
            },
            {
              "depth": 3,
              "value": "awesome-python",
              "heading": "awesome-python"
            },
            {
              "depth": 3,
              "value": "优秀的库",
              "heading": "优秀的库"
            },
            {
              "depth": 4,
              "value": "哪些 Python 库让你相见恨晚？",
              "heading": "哪些-python-库让你相见恨晚？"
            },
            {
              "depth": 4,
              "value": "pandas-profiling",
              "heading": "pandas-profiling"
            },
            {
              "depth": 4,
              "value": "Playhouse",
              "heading": "playhouse"
            },
            {
              "depth": 2,
              "value": "Go",
              "heading": "go"
            },
            {
              "depth": 3,
              "value": "beego",
              "heading": "beego"
            },
            {
              "depth": 3,
              "value": "goframe",
              "heading": "goframe"
            },
            {
              "depth": 2,
              "value": "MySql",
              "heading": "mysql"
            },
            {
              "depth": 3,
              "value": "性能调优",
              "heading": "性能调优"
            },
            {
              "depth": 3,
              "value": "MySQL Group Replication",
              "heading": "mysql-group-replication"
            },
            {
              "depth": 3,
              "value": "security",
              "heading": "security-1"
            },
            {
              "depth": 3,
              "value": "vault",
              "heading": "vault"
            },
            {
              "depth": 2,
              "value": "SQL",
              "heading": "sql"
            },
            {
              "depth": 3,
              "value": "基础语句",
              "heading": "基础语句"
            },
            {
              "depth": 2,
              "value": "虚拟容器",
              "heading": "虚拟容器"
            },
            {
              "depth": 3,
              "value": "docker",
              "heading": "docker"
            },
            {
              "depth": 4,
              "value": "基础使用",
              "heading": "基础使用"
            },
            {
              "depth": 4,
              "value": "cluster",
              "heading": "cluster"
            },
            {
              "depth": 4,
              "value": "registry",
              "heading": "registry"
            },
            {
              "depth": 3,
              "value": "Podman",
              "heading": "podman"
            },
            {
              "depth": 2,
              "value": "Kubernetes",
              "heading": "kubernetes"
            },
            {
              "depth": 2,
              "value": "Redis",
              "heading": "redis"
            },
            {
              "depth": 2,
              "value": "Nginx",
              "heading": "nginx"
            },
            {
              "depth": 2,
              "value": "Kafka",
              "heading": "kafka"
            },
            {
              "depth": 2,
              "value": "RocketMQ",
              "heading": "rocketmq"
            },
            {
              "depth": 2,
              "value": "Gradle",
              "heading": "gradle"
            },
            {
              "depth": 2,
              "value": "Groovy",
              "heading": "groovy"
            },
            {
              "depth": 3,
              "value": "基础联系",
              "heading": "基础联系"
            },
            {
              "depth": 2,
              "value": "Hadoop",
              "heading": "hadoop"
            },
            {
              "depth": 2,
              "value": "Security",
              "heading": "security-2"
            },
            {
              "depth": 2,
              "value": "通识",
              "heading": "通识"
            },
            {
              "depth": 2,
              "value": "经验",
              "heading": "经验"
            }
          ],
          "title": "我学习过的知识"
        },
        "title": "我学习过的知识"
      },
      {
        "path": "/study_new_languge",
        "component": require('../../STUDY_NEW_LANGUGE.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/STUDY_NEW_LANGUGE.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 1,
              "value": "如何快速掌握一门新的语言",
              "heading": "如何快速掌握一门新的语言"
            },
            {
              "depth": 1,
              "value": "基础数据结构",
              "heading": "基础数据结构"
            },
            {
              "depth": 2,
              "value": "Java",
              "heading": "java"
            },
            {
              "depth": 3,
              "value": "HashMap",
              "heading": "hashmap"
            },
            {
              "depth": 3,
              "value": "ArrayList",
              "heading": "arraylist"
            },
            {
              "depth": 2,
              "value": "Python",
              "heading": "python"
            },
            {
              "depth": 3,
              "value": "字典",
              "heading": "字典"
            },
            {
              "depth": 3,
              "value": "列表",
              "heading": "列表"
            },
            {
              "depth": 2,
              "value": "Go",
              "heading": "go"
            },
            {
              "depth": 3,
              "value": "字典　map",
              "heading": "字典-map"
            },
            {
              "depth": 3,
              "value": "切片 slice",
              "heading": "切片-slice"
            }
          ],
          "title": "如何快速掌握一门新的语言"
        },
        "title": "如何快速掌握一门新的语言"
      },
      {
        "path": "/spring-boot",
        "component": require('../../SpringBoot.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/SpringBoot.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 1,
              "value": "SpringBoot",
              "heading": "springboot"
            },
            {
              "depth": 2,
              "value": "启动程序",
              "heading": "启动程序"
            },
            {
              "depth": 2,
              "value": "常用操作",
              "heading": "常用操作"
            },
            {
              "depth": 3,
              "value": "获取yaml配置信息",
              "heading": "获取yaml配置信息"
            },
            {
              "depth": 2,
              "value": "常用注解",
              "heading": "常用注解"
            },
            {
              "depth": 3,
              "value": "Controller",
              "heading": "controller"
            },
            {
              "depth": 3,
              "value": "RestController",
              "heading": "restcontroller"
            },
            {
              "depth": 3,
              "value": "Service",
              "heading": "service"
            },
            {
              "depth": 3,
              "value": "Import",
              "heading": "import"
            },
            {
              "depth": 3,
              "value": "MapperScan",
              "heading": "mapperscan"
            },
            {
              "depth": 3,
              "value": "Mapper",
              "heading": "mapper"
            },
            {
              "depth": 3,
              "value": "Scope",
              "heading": "scope"
            },
            {
              "depth": 3,
              "value": "Lazy",
              "heading": "lazy"
            },
            {
              "depth": 3,
              "value": "基于SpringBoot的优秀脚手架",
              "heading": "基于springboot的优秀脚手架"
            },
            {
              "depth": 2,
              "value": "SpringCloud",
              "heading": "springcloud"
            },
            {
              "depth": 3,
              "value": "SpringSecurity",
              "heading": "springsecurity"
            },
            {
              "depth": 4,
              "value": "git源代码",
              "heading": "git源代码"
            },
            {
              "depth": 3,
              "value": "RSA接口自动加解密",
              "heading": "rsa接口自动加解密"
            },
            {
              "depth": 3,
              "value": "数据库相关",
              "heading": "数据库相关"
            },
            {
              "depth": 4,
              "value": "读写分离",
              "heading": "读写分离"
            },
            {
              "depth": 4,
              "value": "多数据源",
              "heading": "多数据源"
            },
            {
              "depth": 2,
              "value": "源码学习",
              "heading": "源码学习"
            },
            {
              "depth": 3,
              "value": "jackson",
              "heading": "jackson"
            },
            {
              "depth": 3,
              "value": "slf4j-spring-boot-starter",
              "heading": "slf4j-spring-boot-starter"
            },
            {
              "depth": 3,
              "value": "xxl-job-spring-boot-starter",
              "heading": "xxl-job-spring-boot-starter"
            },
            {
              "depth": 3,
              "value": "spring-boot-mybatis-sample",
              "heading": "spring-boot-mybatis-sample"
            },
            {
              "depth": 3,
              "value": "scm-springboot",
              "heading": "scm-springboot"
            },
            {
              "depth": 3,
              "value": "printparam-spring-boot-starter",
              "heading": "printparam-spring-boot-starter"
            },
            {
              "depth": 3,
              "value": "若干 starter集合",
              "heading": "若干-starter集合"
            },
            {
              "depth": 3,
              "value": "trace-log-spring-boot-starter",
              "heading": "trace-log-spring-boot-starter"
            }
          ],
          "title": "SpringBoot"
        },
        "title": "SpringBoot"
      },
      {
        "path": "/tool",
        "component": require('../../TOOL.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/TOOL.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 1,
              "value": "Tool",
              "heading": "tool"
            },
            {
              "depth": 2,
              "value": "software",
              "heading": "software"
            },
            {
              "depth": 3,
              "value": "IDEA",
              "heading": "idea"
            },
            {
              "depth": 4,
              "value": "快捷键",
              "heading": "快捷键"
            },
            {
              "depth": 3,
              "value": "Pycharm",
              "heading": "pycharm"
            },
            {
              "depth": 4,
              "value": "插件",
              "heading": "插件"
            }
          ],
          "title": "Tool"
        },
        "title": "Tool"
      },
      {
        "path": "/vue",
        "component": require('../../VUE.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/VUE.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 1,
              "value": "Vue",
              "heading": "vue"
            }
          ],
          "title": "Vue"
        },
        "title": "Vue"
      },
      {
        "path": "/mybatis-plus",
        "component": require('../../mybatis-plus.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/mybatis-plus.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 1,
              "value": "mybatis-plus学习",
              "heading": "mybatis-plus学习"
            },
            {
              "depth": 2,
              "value": "官网",
              "heading": "官网"
            },
            {
              "depth": 3,
              "value": "码云",
              "heading": "码云"
            },
            {
              "depth": 2,
              "value": "基本配置,导入依赖",
              "heading": "基本配置导入依赖"
            },
            {
              "depth": 3,
              "value": "SpringBoot下:",
              "heading": "springboot下"
            },
            {
              "depth": 3,
              "value": "yaml配置",
              "heading": "yaml配置"
            },
            {
              "depth": 2,
              "value": "配置Mapper,Model,Service,注解,XML",
              "heading": "配置mappermodelservice注解xml"
            },
            {
              "depth": 3,
              "value": "所有Model应该继承mybatis-plus的Mode",
              "heading": "所有model应该继承mybatis-plus的mode"
            },
            {
              "depth": 3,
              "value": "所有Mapper应该继承mybatis-plus的BaseMapper",
              "heading": "所有mapper应该继承mybatis-plus的basemapper"
            },
            {
              "depth": 3,
              "value": "相关的Service应该继承mybatis-plus的IService",
              "heading": "相关的service应该继承mybatis-plus的iservice"
            },
            {
              "depth": 3,
              "value": "XML或注解配置方式",
              "heading": "xml或注解配置方式"
            },
            {
              "depth": 2,
              "value": "总结",
              "heading": "总结"
            },
            {
              "depth": 2,
              "value": "使用",
              "heading": "使用"
            }
          ],
          "title": "mybatis-plus学习"
        },
        "title": "mybatis-plus学习"
      },
      {
        "path": "/代码管理",
        "component": require('../../代码管理.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/代码管理.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 1,
              "value": "代码版本控制",
              "heading": "代码版本控制"
            },
            {
              "depth": 3,
              "value": "git客户端安装",
              "heading": "git客户端安装"
            },
            {
              "depth": 3,
              "value": "GitFlow模型",
              "heading": "gitflow模型"
            },
            {
              "depth": 4,
              "value": "三路合并",
              "heading": "三路合并"
            },
            {
              "depth": 3,
              "value": "执行规范",
              "heading": "执行规范"
            }
          ],
          "title": "代码版本控制"
        },
        "title": "代码版本控制"
      },
      {
        "path": "/devops/git 在团队中的最佳实践--如何正确使用git flow",
        "component": require('../../devops/Git 在团队中的最佳实践--如何正确使用Git Flow.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/devops/Git 在团队中的最佳实践--如何正确使用Git Flow.md",
          "updatedTime": 1603167710865,
          "slugs": [
            {
              "depth": 1,
              "value": "Git 在团队中的最佳实践--如何正确使用Git Flow",
              "heading": "git-在团队中的最佳实践--如何正确使用git-flow"
            },
            {
              "depth": 2,
              "value": "Git的优点",
              "heading": "git的优点"
            },
            {
              "depth": 2,
              "value": "版本管理的挑战",
              "heading": "版本管理的挑战"
            },
            {
              "depth": 2,
              "value": "Git Flow",
              "heading": "git-flow"
            },
            {
              "depth": 2,
              "value": "Git Flow常用的分支",
              "heading": "git-flow常用的分支"
            },
            {
              "depth": 3,
              "value": "Production 分支",
              "heading": "production-分支"
            },
            {
              "depth": 3,
              "value": "Develop 分支",
              "heading": "develop-分支"
            },
            {
              "depth": 3,
              "value": "Feature 分支",
              "heading": "feature-分支"
            },
            {
              "depth": 3,
              "value": "Release分支",
              "heading": "release分支"
            },
            {
              "depth": 3,
              "value": "Hotfix分支",
              "heading": "hotfix分支"
            },
            {
              "depth": 2,
              "value": "Git Flow如何工作",
              "heading": "git-flow如何工作"
            },
            {
              "depth": 3,
              "value": "初始分支",
              "heading": "初始分支"
            },
            {
              "depth": 3,
              "value": "Feature 分支",
              "heading": "feature-分支-1"
            },
            {
              "depth": 3,
              "value": "Release分支",
              "heading": "release分支-1"
            },
            {
              "depth": 3,
              "value": "维护分支 Hotfix",
              "heading": "维护分支-hotfix"
            },
            {
              "depth": 2,
              "value": "Git Flow代码示例",
              "heading": "git-flow代码示例"
            },
            {
              "depth": 2,
              "value": "Git flow工具",
              "heading": "git-flow工具"
            },
            {
              "depth": 3,
              "value": "安装",
              "heading": "安装"
            },
            {
              "depth": 3,
              "value": "使用",
              "heading": "使用"
            },
            {
              "depth": 2,
              "value": "Git Flow GUI",
              "heading": "git-flow-gui"
            },
            {
              "depth": 3,
              "value": "综上所述",
              "heading": "综上所述"
            }
          ],
          "title": "Git 在团队中的最佳实践--如何正确使用Git Flow",
          "group": {
            "path": "/devops",
            "title": "Devops"
          }
        },
        "title": "Git 在团队中的最佳实践--如何正确使用Git Flow"
      },
      {
        "path": "/devops/电脑卡顿解决办法",
        "component": require('../../devops/电脑卡顿解决办法.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/devops/电脑卡顿解决办法.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 1,
              "value": "查看后台常驻进程",
              "heading": "查看后台常驻进程"
            }
          ],
          "title": "查看后台常驻进程",
          "group": {
            "path": "/devops",
            "title": "Devops"
          }
        },
        "title": "查看后台常驻进程"
      },
      {
        "path": "/normal",
        "component": require('../../normal/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/normal/README.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 1,
              "value": "常用配置文件",
              "heading": "常用配置文件"
            },
            {
              "depth": 3,
              "value": "logback.xml",
              "heading": "logbackxml"
            },
            {
              "depth": 3,
              "value": "log4j.properties",
              "heading": "log4jproperties"
            },
            {
              "depth": 3,
              "value": "log4j2.xml",
              "heading": "log4j2xml"
            },
            {
              "depth": 3,
              "value": "rexdb.xml",
              "heading": "rexdbxml"
            },
            {
              "depth": 3,
              "value": "ResourceUtil.java",
              "heading": "resourceutiljava"
            }
          ],
          "title": "常用配置文件",
          "group": {
            "path": "/normal",
            "title": "Normal"
          }
        },
        "title": "常用配置文件"
      },
      {
        "path": "/normal/bashrc",
        "component": require('../../normal/bashrc.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/normal/bashrc.md",
          "updatedTime": 1602159523000,
          "slugs": [],
          "title": "Bashrc",
          "group": {
            "path": "/normal",
            "title": "Normal"
          }
        },
        "title": "Bashrc"
      },
      {
        "path": "/normal/logback",
        "component": require('../../normal/logback.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/normal/logback.md",
          "updatedTime": 1602159523000,
          "slugs": [],
          "title": "Logback",
          "group": {
            "path": "/normal",
            "title": "Normal"
          }
        },
        "title": "Logback"
      },
      {
        "path": "/normal/快捷键",
        "component": require('../../normal/快捷键.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/normal/快捷键.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 2,
              "value": "idea快捷键",
              "heading": "idea快捷键"
            }
          ],
          "title": "idea快捷键",
          "group": {
            "path": "/normal",
            "title": "Normal"
          }
        },
        "title": "idea快捷键"
      },
      {
        "path": "/security/rsa",
        "component": require('../../security/RSA.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/security/RSA.md",
          "updatedTime": 1602159523000,
          "slugs": [
            {
              "depth": 1,
              "value": "带你彻底理解RSA算法原理",
              "heading": "带你彻底理解rsa算法原理"
            }
          ],
          "title": "带你彻底理解RSA算法原理",
          "group": {
            "path": "/security",
            "title": "Security"
          }
        },
        "title": "带你彻底理解RSA算法原理"
      },
      {
        "path": "/devops",
        "meta": {},
        "exact": true,
        "redirect": "/devops/git 在团队中的最佳实践--如何正确使用git flow"
      }
    ],
    "title": "dumi"
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
