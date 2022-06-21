import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Versea
} from '@versea/versea'
import { IPluginSourceEntry } from '@versea/plugin-source-entry'
import { IPluginSandbox } from '@versea/plugin-sandbox'

const versea = new Versea({ defaultContainer: '#microApp' })
versea.use(IPluginSourceEntry)
versea.use(IPluginSandbox)

versea.registerApps([
  {
    name: 'subapp-react18',
    routes: [{
      path: 'subapp-react18'
    }],
    assetsPublicPath: 'http://localhost:3000',
    scripts: [
      'http://localhost:3000/static/js/bundle.js'
    ]
  },
  {
    name: 'subapp-vue',
    routes: [{
      path: 'subapp-vue',
      children: [
        {
          path: '/about'
        },
        {
          path: '/'
        }
      ]
    }],
    scripts: [
      'http://localhost:8088/subapp-vue/js/chunk-vendors.js',
      'http://localhost:8088/subapp-vue/js/app.js'
    ]
  }
])

Vue.config.productionTip = false;

(window as any).versea = versea

new Vue({
  router,
  store,
  mounted () {
    versea.start()
  },
  render: h => h(App)
}).$mount('#app')
