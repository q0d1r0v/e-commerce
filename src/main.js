import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Toast from "vue-toastification";
import VuetifyOverlay from "vuetify-overlay";
import "vue-toastification/dist/index.css";

Vue.config.productionTip = false;

Vue.use(Toast);
Vue.use(VuetifyOverlay);

new Vue({
  router,
  store,
  vuetify,
  Toast,
  VuetifyOverlay,
  render: (h) => h(App),
}).$mount("#app");
