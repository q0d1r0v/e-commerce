import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import notFoundPage from "../views/notFoundPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "notFoundPage",
    component: notFoundPage,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users",
    name: "Users",
    component: () =>
      import(/* webpackChunkName: "Users" */ "../views/users-page"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/login-page"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
