import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let vm = null

export function mount () {
  vm = new Vue({
    router,
    render: h => h(App)
  }).$mount('#parcel-vue')
}

export function unmount () {
  vm.$destroy()
  vm.$el.innerHTML = ''
  vm = null
}
