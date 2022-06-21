const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'http://localhost:8088/child-vue',
  devServer: {
    port: 8088
  },
  configureWebpack: {
    output: {
      library: 'child-vue',
      libraryTarget: 'umd'
    }
  }
})
