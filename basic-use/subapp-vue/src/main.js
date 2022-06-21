import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let vm = null;

window.a = 1

export function mount() {
  console.log('app1 mount')
  console.log(window.a)
  vm = new Vue({
    router,
    render: h => h(App)
  }).$mount('#subapp-vue');
}

export function unmount() {
  console.log('app1 unmount')
  vm.$destroy()
  vm.$el.innerHTML = ''
  vm = null
}
