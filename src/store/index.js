import Vue from "vue";
import Vuex from "vuex";
import navigationDrawer from "./modules/navigation-drawer";
import items from "./modules/items";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    navigationDrawer,
    items,
  },
});
