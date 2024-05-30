import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      loading: false
    };
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    }
  },
  actions: {
    setLoading({ commit }, payload) {
      commit('setLoading', payload);
    }
  },
  getters: {
    isLoading: state => state.loading
  }
});

export default store;
