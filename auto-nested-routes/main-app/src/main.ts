import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Versea
} from '@versea/versea'
import { IPluginSourceEntry } from '@versea/plugin-source-entry'
import { IPluginAutoWaitContainer } from '@versea/plugin-auto-wait-container'
import { IPluginSandbox } from '@versea/plugin-sandbox'

const versea = new Versea({ defaultContainer: '#microApp' })
versea.use(IPluginSourceEntry)
versea.use(IPluginAutoWaitContainer)
versea.use(IPluginSandbox)

versea.registerApp({
  name: 'child-react18',
  routes: [{
    path: 'child-react18',
    slot: 'react-container',
    children: [{
      path: '/(.*)'
    }]
  }],
  scripts: [
    {
      module: true,
      code: 'console.log("inline");'
    },
    'http://localhost:3000/child-react18/static/js/bundle.js'
  ]
})

versea.registerApp({
  name: 'child-vue',
  routes: [{
    fill: 'react-container',
    path: 'child-vue',
    pathToRegexpOptions: {
      end: false
    }
  }],
  scripts: [
    'http://localhost:8088/child-vue/js/chunk-vendors.js',
    'http://localhost:8088/child-vue/js/app.js'
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted () {
    versea.start()
  },
  render: h => h(App)
}).$mount('#app');

(window as unknown as { versea: Versea }).versea = versea
