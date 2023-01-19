import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Versea
} from '@versea/versea'
import { IPluginSourceEntry } from '@versea/plugin-source-entry'

const versea = new Versea({ defaultContainer: '#microApp' })
versea.use(IPluginSourceEntry)

versea.registerApps([
  {
    name: 'child-react18',
    routes: [{
      path: 'child-react18',
      pathToRegexpOptions: {
        end: false
      }
    }],
    scripts: [
      'http://localhost:3000/child-react18/static/js/bundle.js'
    ]
  },
  {
    name: 'child-vue',
    routes: [{
      path: 'child-vue',
      pathToRegexpOptions: {
        end: false
      }
    }],
    scripts: [
      'http://localhost:8088/child-vue/js/chunk-vendors.js',
      'http://localhost:8088/child-vue/js/app.js'
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
