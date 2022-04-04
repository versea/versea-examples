const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{// 开发配置
    host:'localhost',
    port:8981,
    https:false,
    open:true,// 是否自动打开浏览器
    // proxy:{},// 代理
  },
})
