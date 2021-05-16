<template>
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

<style>
#app {
  font-family: 'Poppins', sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
}
.router-container {
  width: 80vw;
}
</style>
