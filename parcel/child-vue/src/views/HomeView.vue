<template>
  <div class="home">
    <h1>child-vue home page</h1>
    <div @click="goReact">to main react App</div>
    <div id="parcel-vue"></div>
  </div>
</template>

<script>
const parcelApp = window.verseaApp.registerParcel({
  name: 'parcel-vue',
  container: '#parcel-vue',
  scripts: [
    'http://localhost:8089/parcel-vue/js/chunk-vendors.js',
    'http://localhost:8089/parcel-vue/js/app.js'
  ]
});

export default {
  name: 'HomeView',
  methods: {
    goReact() {
      window.history.pushState(null, null, '/child-react18/xxxx');
    }
  },
  mounted() {
    parcelApp.loadAndMount();
  },
  beforeDestroy() {
    if (parcelApp.status === 'Mounted') {
      parcelApp.unmount();
    }
  }
}
</script>
