<template>
  <!-- Holds the menu and the router view-->
  <WebMenu />
  <router-view class="router-container"/>
</template>

<script>
import WebMenu from './components/WebMenu.vue'

export default {
  name: 'App',
  components: {
    WebMenu
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  @media (min-width: 961px) {
    display: flex;
    flex-direction: row;
  }
}
.router-container {
  width: 80vw;
}
</style>
