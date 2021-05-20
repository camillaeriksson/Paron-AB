<template>
  <div class="web-menu-container">
    <img src="../assets/logo.svg">
    <div class="router-links-container">
      <router-link class="router-link" to="/stock"><i class="fas fa-lg fa-cubes"></i>Lagersaldo</router-link>
      <router-link class="router-link" to="/ingoing"><i class="fas fa-lg fa-sign-in-alt"></i>Ingående</router-link>
      <router-link class="router-link" to="/outgoing"><i class="fas fa-lg fa-sign-out-alt"></i>Utgående</router-link>
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
    margin: 40px 0 30px 0;
    width: 150px;
  }
  i {
    margin-right: 15px;
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
    height: 60px;
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