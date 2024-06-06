import { createStore } from "vuex";

export default createStore({
  state: {
    matrix: [],
    selectedNum: 0,
    mistakesQuantity: 0,
  },
  getters: {},
  mutations: {
    makeSelected(state, num: number) {
      state.selectedNum = num;
    },
    incrementMistake(state) {
      state.mistakesQuantity++;
    },
  },
  actions: {},
  modules: {},
});
