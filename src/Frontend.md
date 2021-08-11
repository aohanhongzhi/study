前端
===

# VUE

1. [前端布局神器display:flex](https://www.cnblogs.com/qingchunshiguang/p/8011103.html)
1. [数据可视化解决方案](https://antv.gitee.io/zh)
1. [uni-app](https://gitee.com/dcloud/uni-app) 是一个使用 Vue.js 开发小程序、H5、App的统一前端框架。
1. [element-plus](https://gitee.com/element-plus/element-plus)
1. [vxe-table](https://gitee.com/xuliangzhan_admin/vxe-table)

## 技巧
1. [本地调试线上代码](https://tech.youzan.chttps://ant-design.gitee.io/index-cnom/zan-proxy/)


# React


https://react.docschina.org/

https://gitee.com/rsuite/rsuite


### UI

https://gitee.com/element-plus/element-plus

https://ant-design.gitee.io/index-cn

https://gitee.com/heyui/heyui

https://gitee.com/zdhxiong/mdui


## 网络请求库

网络请求封装的思考，如果response拦截器能区分请求方法，POST一般是增加数据，这种需要知道成功了没有，也就是可以针对http status code和 data.code来弹出提示框。

GET请求一般是查询数据，重点是处理data.data，所以可以直接忽略 message信息，也就是不用弹出data.message提示框信息，但是要处理http status code 信息，比如获取失败啥的还是需要弹出个框。

https://github.com/umijs/umi-request/blob/master/README_zh-CN.md


