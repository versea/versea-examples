<template>
  <div class="home">
    <h1>app1 home page</h1>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div @click="goReact">to main react App</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
    goReact() {
      window.history.pushState(null, null, '/subapp-react18/xxxx');
    }
  }
}
</script>
