import { createStore } from 'vuex';

const counterModule = {
  // namespaced 가 true인 경우 메인 스토어에서 사용할 수 없다.
  namespaced: true,
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
  },
  mutations: {
    // state = 현재 상태
    increaseCount(state, payload) {
      console.log('increaseCount', state, payload);
      state.count = state.count + payload.value;
    },
  },
};

const authModule = {
  state() {
    return {
      isLoggIn: false,
    };
  },
  getters: {
    userIsAuthenticated(state) {
      // localState, rootState 차이점
      // authModule은 rootState에 포함되기 때문에 하위의 localState를 참조할 수 있다.
      console.log('userIsAuthenticated', state); // Object { isLoggIn: false, counterModule: {…} }
      return state.isLoggIn;
    },
  },
  // asyncronous code
  actions: {
    login(context) {
      console.log('login', context);
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  mutations: {
    setAuth(state, payload) {
      console.log('setAuth', state);
      state.isLoggIn = payload.isAuth;
    },
  },
};

// const store = createStore({
//   state() {
//     return {
//       count: 0,
//       isLoggIn: false,
//     };
//   },
//   getters: {
//     // other getters
//     // getCounter(state, getters) {
//     getCounter(state) {
//       return state.count * 3;
//     },
//     normalizedCounter(_, getters) {
//       const finalCounter = getters.getCounter;
//       if (finalCounter < 0) {
//         return 0;
//       }
//       if (finalCounter > 100) {
//         return 100;
//       }
//       return finalCounter;
//     },
//     userIsAuthenticated(state) {
//       return state.isLoggIn;
//     },
//   },
//   // asyncronous code
//   actions: {
//     increase(context) {
//       // context 에 있는 state를 이용해서 값을 변경하지말고 mutations을 이용해야한다.
//       console.log('increase', context);
//       setTimeout(() => {
//         context.commit('increaseCount', { value: 2 });
//       }, 2000);
//     },
//     increment(context, payload) {
//       context.commit('increaseCount', payload);
//     },
//     login(context) {
//       context.commit('setAuth', { isAuth: true });
//     },
//     logout(context) {
//       context.commit('setAuth', { isAuth: false });
//     },
//   },
//   mutations: {
//     // state = 현재 상태
//     increaseCount(state, payload) {
//       console.log('increaseCount', payload);
//       state.count = state.count + payload.value;
//     },
//     setAuth(state, payload) {
//       state.isLoggIn = payload.isAuth;
//     },
//   },
// });

const store = createStore({
  modules: {
    counterModule,
  },
  ...authModule,
});

export default store;
