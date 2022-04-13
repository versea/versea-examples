const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 告诉子应用在这个地址加载静态资源，否则会去基座应用的域名下加载
  publicPath: '/subapp-vue',
  // 开发服务器
  devServer: {
    port: 8081
  },
  configureWebpack: {
    output: {
      library: 'microApp',
      libraryTarget: 'umd'
    }
  }
})
