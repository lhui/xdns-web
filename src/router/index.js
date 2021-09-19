import { createWebHistory, createRouter } from "vue-router";
import DNSList from "../components/DNSList.vue";

const routes = [
  {
    path: "/",
    name: "DNSList",
    component: DNSList,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;