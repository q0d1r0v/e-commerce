const state = {
  data: {
    item: null,
    item_id: null,
  },
};
const getters = {
  item: (state) => {
    return state.data.item;
  },
  item_id: (state) => {
    return state.data.item_id;
  },
};
const mutations = {
  CHANGE_ITEM: (state, data) => {
    state.data.item = data;
    state.data.item_id = data.data.id;
  },
};
const actions = {
  changeItem(mutations, data) {
    mutations.commit("CHANGE_ITEM", data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
