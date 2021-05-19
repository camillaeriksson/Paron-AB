import { createWebHistory, createRouter } from "vue-router"
import Stock from "../components/Stock.vue"
import RegisterProducts from "../components/RegisterProducts.vue"

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
    component: RegisterProducts,
  },
  {
    path: "/outgoing",
    name: "outgoing",
    component: RegisterProducts,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router