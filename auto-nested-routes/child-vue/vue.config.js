const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'http://localhost:8088/child-vue',
  devServer: {
    port: 8088,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: 'child-vue',
      libraryTarget: 'umd'
    }
  }
})
