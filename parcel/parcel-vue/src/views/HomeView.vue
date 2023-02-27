<template>
  <div class="home">
    <h1>parcel-vue home page</h1>
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
    goReact () {
      window.history.pushState(null, null, '/child-react18/xxxx')
    }
  }
}
</script>
