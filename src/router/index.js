import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/index/index.vue"),
    meta: {
      keepAlive: true,
    },
  },
  {
    path: "/404",
    name: "error",
    component: () => import("../views/error/index.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
