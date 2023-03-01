<template>
  <div class="home">
    <h1>child-vue home page</h1>
    <div @click="goReact">to main react App</div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    goReact () {
      window.history.pushState(null, null, '/child-react18/xxxx')
    }
  }
}
</script>
