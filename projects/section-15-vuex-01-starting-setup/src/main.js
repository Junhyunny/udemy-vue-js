import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  actions: {
    increase(context) {
      console.log('increase');
      context.commit('increaseCount');
    },
  },
  mutations: {
    // state = 현재 상태
    increaseCount(state) {
      console.log('increaseCount');
      state.count++;
    },
  },
});

const app = createApp(App);
app.use(store);
app.mount('#app');
