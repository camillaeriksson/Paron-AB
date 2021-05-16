import { createWebHistory, createRouter } from "vue-router";
import Stock from "../components/Stock.vue";
import Ingoing from "../components/Ingoing.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;