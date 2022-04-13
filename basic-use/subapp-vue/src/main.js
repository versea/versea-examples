import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
const appOptions = {
  el: '#microApp',
  router,
  render: h => h(App)
}

export function bootstrap() {
  console.log('app1 bootstrap')
}

export function mount() {
  console.log('app1 mount')
  new Vue(appOptions);
}

export function unmount() {
  console.log('app1 unmount')
}