const state = {
  data: {
    show: false,
  },
};
const getters = {
  show: (state) => {
    return state.data.show;
  },
};
const mutations = {
  SHOW_DRAWER: (state) => {
    state.data.show = true;
  },
  HIDE_DRAWER: (state) => {
    state.data.show = false;
  },
};
const actions = {
  showDrawer({ commit }) {
    commit("SHOW_DRAWER");
  },
  hideDrawer({ commit }) {
    commit("HIDE_DRAWER");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
