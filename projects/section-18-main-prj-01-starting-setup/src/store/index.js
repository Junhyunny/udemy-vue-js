import { createStore } from 'vuex';

import coaches from './modules/coaches';
import requests from './modules/requests';
import auth from './modules/auth';

const store = createStore({
  modules: {
    coaches,
    requests,
    auth,
  },
  state() {
    return { isLoading: false };
  },
  getters: {
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
