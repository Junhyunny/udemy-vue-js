import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      count: 0,
      isLoggIn: false,
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
    userIsAuthenticated(state) {
      return state.isLoggIn;
    },
  },
  // asyncronous code
  actions: {
    increase(context) {
      // context 에 있는 state를 이용해서 값을 변경하지말고 mutations을 이용해야한다.
      console.log('increase', context);
      setTimeout(() => {
        context.commit('increaseCount', { value: 2 });
      }, 2000);
    },
    increment(context, payload) {
      context.commit('increaseCount', payload);
    },
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  mutations: {
    // state = 현재 상태
    increaseCount(state, payload) {
      console.log('increaseCount', payload);
      state.count = state.count + payload.value;
    },
    setAuth(state, payload) {
      state.isLoggIn = payload.isAuth;
    },
  },
});

const app = createApp(App);
app.use(store);
app.mount('#app');