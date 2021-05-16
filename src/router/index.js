import { createWebHistory, createRouter } from "vue-router"
import Stock from "../components/Stock.vue"
import Ingoing from "../components/Ingoing.vue"
import Outgoing from "../components/Outgoing.vue"

const routes = [
  {
    path: "/",
    redirect: { name: 'stock' }
  },
  {
    path: "/stock",
    name: "stock",
    component: Stock,
  },
  {
    path: "/ingoing",
    name: "ingoing",
    component: Ingoing,
  },
  {
    path: "/outgoing",
    name: "outgoing",
    component: Outgoing,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router