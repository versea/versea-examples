import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  buildProviderModule,
  IAppController,
  IAppControllerKey,
  AppConfig,
  IAppKey,
  provide,
  provideValue,
  AppDependencies,
  // IRouter,
  // IRouterKey,
  IRouterController,
  IRouterControllerKey
} from '@versea/core'
import { Container, inject } from 'inversify'

// 远程加载子应用
function createScript (url: string) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url
    script.onload = resolve
    script.onerror = reject
    const firstScript: any = document.getElementsByTagName('script')[0]
    firstScript.parentNode.insertBefore(script, firstScript)
  })
}

const container = new Container({ defaultScope: 'Singleton' })
container.load(buildProviderModule())
container.get<IAppController>(IAppControllerKey).registerApps([
  {
    name: 'subapp-react18',
    routes: [{
      path: 'subapp-react18/(.*)'
    }],
    loadApp: async () => {
      await createScript('http://localhost:3000/static/js/bundle.js')
      return (window as any).microApp
    }
  },
  {
    name: 'subapp-vue',
    routes: [{
      path: '/subapp-vue/(.*)'
    }],
    loadApp: async () => {
      await createScript('http://localhost:8081/subapp-vue/js/chunk-vendors.js')
      await createScript('http://localhost:8081/subapp-vue/js/app.js')
      return (window as any).microApp
    }
  }
])

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted () {
    container.get<IRouterController>(IRouterControllerKey).start()
  },
  render: h => h(App)
}).$mount('#app')
