<template>
<div>
<Menubar :model="items" class="top-menu"/>
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
            items: [
                {
                   label:'File',
                   icon:'pi pi-fw pi-file',
                   items:[
                      {
                         label:'New',
                         icon:'pi pi-fw pi-plus',
                         items:[
                            {
                               label:'Bookmark',
                               icon:'pi pi-fw pi-bookmark'
                            },
                            {
                               label:'Video',
                               icon:'pi pi-fw pi-video'
                            },

                         ]
                      },
                      {
                         label:'Delete',
                         icon:'pi pi-fw pi-trash'
                      },
                      {
                         separator:true
                      },
                      {
                         label:'Export',
                         icon:'pi pi-fw pi-external-link'
                      }
                   ]
                },
                {
                   label:'Edit',
                   icon:'pi pi-fw pi-pencil',
                   items:[
                      {
                         label:'Left',
                         icon:'pi pi-fw pi-align-left'
                      },
                      {
                         label:'Right',
                         icon:'pi pi-fw pi-align-right'
                      },
                      {
                         label:'Center',
                         icon:'pi pi-fw pi-align-center'
                      },
                      {
                         label:'Justify',
                         icon:'pi pi-fw pi-align-justify'
                      },

                   ]
                },
                {
                   label:'Users',
                   icon:'pi pi-fw pi-user',
                   items:[
                      {
                         label:'New',
                         icon:'pi pi-fw pi-user-plus',

                      },
                      {
                         label:'Delete',
                         icon:'pi pi-fw pi-user-minus',

                      },
                      {
                         label:'Search',
                         icon:'pi pi-fw pi-users',
                         items:[
                            {
                               label:'Filter',
                               icon:'pi pi-fw pi-filter',
                               items:[
                                  {
                                     label:'Print',
                                     icon:'pi pi-fw pi-print'
                                  }
                               ]
                            },
                            {
                               icon:'pi pi-fw pi-bars',
                               label:'List'
                            }
                         ]
                      }
                   ]
                },
                {
                   label:'Events',
                   icon:'pi pi-fw pi-calendar',
                   items:[
                      {
                         label:'Edit',
                         icon:'pi pi-fw pi-pencil',
                         items:[
                            {
                               label:'Save',
                               icon:'pi pi-fw pi-calendar-plus'
                            },
                            {
                               label:'Delete',
                               icon:'pi pi-fw pi-calendar-minus'
                            },

                         ]
                      },
                      {
                         label:'Archieve',
                         icon:'pi pi-fw pi-calendar-times',
                         items:[
                            {
                               label:'Remove',
                               icon:'pi pi-fw pi-calendar-minus'
                            }
                         ]
                      }
                   ]
                },
                {
                   label:'Quit',
                   icon:'pi pi-fw pi-power-off'
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
.top-menu {
  @media (min-width: 961px) {
    display: none;
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