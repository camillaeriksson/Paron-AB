import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'

import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import 'primeflex/primeflex.css'                             //primeflex

const app = createApp(App)

app.use(PrimeVue)
app.use(router)
app.use(ConfirmationService)
app.use(ToastService)

app.mount('#app')
   