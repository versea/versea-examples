import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Versea
} from '@versea/versea'
import { IPluginResourceEntryKey } from '@versea/plugin-resource-entry'

const versea = new Versea({ defaultContainer: '#microApp' })
versea.use(IPluginResourceEntryKey)

versea.registerApps([
  {
    name: 'subapp-react18',
    routes: [{
      path: 'subapp-react18'
    }],
    scripts: [
      'http://localhost:3000/static/js/bundle.js'
    ]
  },
  {
    name: 'subapp-vue',
    routes: [{
      path: 'subapp-vue'
    }],
    scripts: [
      'http://localhost:8081/subapp-vue/js/chunk-vendors.js',
      'http://localhost:8081/subapp-vue/js/app.js'
    ]
  }
])

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted () {
    versea.start()
  },
  render: h => h(App)
}).$mount('#app')
