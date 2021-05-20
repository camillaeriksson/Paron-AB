<template>
  <div>
    <!--Component with top menu from PrimeVue for smaller screens-->
    <Menubar :model="items" class="top-menu">
      <template #end>
        <img src="../assets/small_logo.svg">
      </template>
    </Menubar>
    <!--Side menu for bigger screens-->
    <div class="side-menu-container">
      <img src="../assets/logo.svg">
      <div class="router-links-container">
        <router-link class="router-link" to="/stock"><i class="fas fa-lg fa-cubes"></i>Lagersaldo</router-link>
        <router-link class="router-link" to="/ingoing"><i class="fas fa-lg fa-sign-in-alt"></i>Ingående</router-link>
        <router-link class="router-link" to="/outgoing"><i class="fas fa-lg fa-sign-out-alt"></i>Utgående</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Menubar from 'primevue/menubar'
export default {
  name: 'WebMenu',
  data() {
    return {
      // Items for the top menu from PrimeVue
      items: [
          {
            label:'Lagersaldo',
            icon:'fas fa-lg fa-cubes',
            url: '/stock'
          },
          {
            label:'Ingående',
            icon:'fas fa-lg fa-sign-in-alt',
            url: '/ingoing'
          },
          {
            label:'Utgående',
            icon:'fas fa-lg fa-sign-out-alt',
            url: '/outgoing'
          }
      ]
    }
  },
  components: {
    Menubar
  }
}
</script>

<style lang="scss">
.top-menu.p-menubar {
  @media (min-width: 961px) {
    display: none;
  }
  padding: 10px 20px;
  background: #699461;
  font-size: 20px;
  .pi {
    font-size: 30px;
    color: white;
  }
  .p-menubar-button:hover {
    background: none;
  }
  .p-menubar-button:hover {
    box-shadow: none;
  }
}
.side-menu-container {
  @media (max-width: 960px) {
    display: none;
  }
  min-height: 100vh;
  width: 25vw;
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