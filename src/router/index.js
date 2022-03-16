import Vue from "vue";
import VueRouter from "vue-router";
const home = () => import("../views/home");
const searchPage = () => import("../views/appbar-pages/catolog-page");
const likedPage = () => import("../views/appbar-pages/liked-page");
const bagPage = () => import("../views/appbar-pages/bag-page");
const personalAccountPage = () =>
  import("../views/appbar-pages/personal-account-page");
const notFoundPage = () => import("../views/not-found-page/not-fount-page");
const itemsPage = () => import("../views/items-page/items-page");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
  {
    path: "/catolog",
    name: "Catolog",
    component: searchPage,
  },
  {
    path: "/favourite",
    name: "Favourite",
    component: likedPage,
  },
  {
    path: "/add-to-cart",
    name: "bagPage",
    component: bagPage,
  },
  {
    path: "/personal-account",
    name: "personalAccount",
    component: personalAccountPage,
  },
  {
    path: "/items",
    name: "items",
    props: true,
    component: itemsPage,
  },
  {
    path: "*",
    component: notFoundPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
