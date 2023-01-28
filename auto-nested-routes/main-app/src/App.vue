<template>
  <div id="app">
    <nav>
      <div>主应用</div>
      <router-link to="/child-react18">child-react18</router-link>
    </nav>
    <!-- 子应用容器 -->
    <div id="microApp"></div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
