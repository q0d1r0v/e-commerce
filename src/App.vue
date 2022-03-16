<template>
  <v-app>
    <desktop-app-bar class="fixed desktop-appbar" />
    <top-mobile-app-bar class="mobile-appbar ft-appbar" />
    <v-main style="background: #f8f9f9">
      <router-view />
    </v-main>
    <navigation-drawer style="z-index: 10000" />
    <mobile-app-bar class="m-fixed mobile-appbar" />
  </v-app>
</template>

<script>
const desktopAppBar = () => import("./components/app-bar/desktop-appbar");
const mobileAppBar = () => import("./components/app-bar/mobile-appbar");
const topMobileAppBar = () => import("./components/app-bar/top-mobile-appbar");
const navigationDrawer = () => import("./components/navigation-drawer/nav-bar");
export default {
  name: "App",
  components: {
    desktopAppBar,
    mobileAppBar,
    topMobileAppBar,
    navigationDrawer,
  },

  data() {
    return {};
  },
};
</script>

<style>
@media screen and (min-width: 750px) {
  .mobile-appbar {
    display: none;
  }
}
@media screen and (max-width: 750px) {
  .desktop-appbar {
    display: none;
  }
}
.fixed {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;
}
.m-fixed {
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  z-index: 1;
}
.ft-appbar {
  z-index: 1;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
</style>
