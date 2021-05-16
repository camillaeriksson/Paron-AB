<template>
  <div class="web-menu-container">
    <img src="../assets/logo.svg">
    <router-link to="/stock">Lagersaldo</router-link>
    <router-link to="/stock">Ingående</router-link>
    <router-link to="/stock">Utgående</router-link>
  </div>
</template>

<script>
export default {
  name: 'WebMenu',
}
</script>

<style lang="scss">
.web-menu-container {
  height: 100vh;
  width: 20vw;
  background: #699461;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    margin-top: 40px;
    width: 150px;
  }
}

</style>