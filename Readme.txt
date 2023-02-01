1. loader 返回一个就是模块

接受source 返回js某块

插件
webpack在编译打包的时候,在各个流程里会调用相应的注册事件,可以在回调事件里 修改相应对象 从而影响打包
比如在 emit里可以修改 输出文件


// 优化可以直接参考
https://github.com/PanJiaChen/vue-element-admin/blob/master/vue.config.js