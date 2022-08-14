import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  getters: {
    // other getters
    // getCounter(state, getters) {
    getCounter(state) {
      return state.count * 3;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.getCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
  actions: {
    increase(context) {
      console.log('increase');
      context.commit('increaseCount');
    },
  },
  mutations: {
    // state = 현재 상태
    increaseCount(state, payload) {
      console.log('increaseCount', payload);
      state.count = state.count + payload.value;
    },
  },
});

const app = createApp(App);
app.use(store);
app.mount('#app');
