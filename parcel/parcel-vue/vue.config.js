const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'http://localhost:8089/parcel-vue',
  devServer: {
    port: 8089,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: 'parcel-vue',
      libraryTarget: 'umd'
    }
  }
})
