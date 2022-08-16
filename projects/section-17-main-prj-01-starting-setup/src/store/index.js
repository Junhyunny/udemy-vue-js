import { createStore } from 'vuex';

import coaches from './modules/coaches';
import requests from './modules/requests';

const store = createStore({
  modules: {
    coaches,
    requests,
  },
  state() {
    return { userId: 'c3', isLoading: false };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
    isLoading(state) {
      return state.isLoading;
    },
  },
  mutations: {
    startLoading(state) {
      state.isLoading = true;
    },
    endLoading(state) {
      state.isLoading = false;
    },
  },
});

export default store;
