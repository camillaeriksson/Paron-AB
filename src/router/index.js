import { createWebHistory, createRouter } from "vue-router";
import Stock from "../components/Stock.vue";

const routes = [
  {
    path: "/",
    name: "Stock",
    component: Stock,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;