import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Versea
} from '@versea/versea'
import { IPluginSourceEntry } from '@versea/plugin-source-entry'
import { IPluginSandbox } from '@versea/plugin-sandbox'
import { IPluginHtmlEntry } from '@versea/plugin-html-entry'

const versea = new Versea({ defaultContainer: '#microApp' })
versea.use(IPluginSourceEntry)
versea.use(IPluginSandbox)
versea.use(IPluginHtmlEntry)

versea.registerApps([
  {
    name: 'child-react18',
    routes: [{
      path: 'child-react18',
      pathToRegexpOptions: {
        end: false
      }
    }],
    entry: 'http://localhost:3000/child-react18'
  },
  {
    name: 'child-vue',
    routes: [{
      path: 'child-vue',
      pathToRegexpOptions: {
        end: false
      }
    }],
    entry: 'http://localhost:8088/child-vue'
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
