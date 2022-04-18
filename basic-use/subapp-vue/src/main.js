import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let vm = null;

export function bootstrap() {
  console.log('app1 bootstrap')
}

export function mount() {
  console.log('app1 mount')
  vm = new Vue({
    router,
    render: h => h(App)
  }).$mount('#microApp');
}

export function unmount() {
  console.log('app1 unmount')
  vm.$destroy();
}