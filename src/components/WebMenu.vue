<template>
  <div class="web-menu-container">
    <img src="../assets/logo.svg">
    <div class="router-links-container">
      <router-link class="router-link" to="/stock">Lagersaldo</router-link>
      <router-link class="router-link" to="/ingoing">Ingående</router-link>
      <router-link class="router-link" to="/outgoing">Utgående</router-link>
    </div>
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
.router-links-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  .router-link {
    font-size: 20px;
    text-decoration: none;
    color: white;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .router-link-exact-active {
    background: #D2E7CF;
    color: #689461;
  }
}

</style>