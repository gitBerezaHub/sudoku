import { createStore } from "vuex";

export default createStore({
  state: {
    matrix: [],
    selectedNum: 0,
  },
  getters: {},
  mutations: {
    makeSelected(state, num: number) {
      state.selectedNum = num;
      //   eslint-disable-next-line
    },
  },
  actions: {},
  modules: {},
});
