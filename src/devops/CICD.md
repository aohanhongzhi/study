CICD
===

持续集成与持续部署



# 代码管理

gitlab使用非常广，与其他软件的集成就非常不错。



# 自动部署

jenkins是非常老牌的自动化部署工具了，与gitlab集成非常好。



# 自动测试

自动化测试是一件非常重要且有意义的事情。首页第一个就是要写好自己软件里面的单元测试。保证增加，修改，查询，删除都测试正确。

单元测试可以由jenkins定时（每天凌晨两点开始）触发，或者gitlab的事件出发jenkins去执行即可。



全链路压测

https://github.com/shulieTech/Takin



jmeter性能测试

https://jmeter.apache.org/





# 自动化代码质量检查

jenkins集成是sonarqube即可。项目里集成chekstyle等插件。

# 监控


## 系统监控

带宽，CPU,内存，硬盘，I/O等硬件资源的监控

Nagios 

Cacti

Canglia

### OpenFalcon 小米开源的

初衷就是因为zabbix满足不了现有需求。

https://book.open-falcon.org/zh/

