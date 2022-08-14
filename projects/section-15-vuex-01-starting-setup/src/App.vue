<template>
  <base-container v-if="userIsAuthenticated" title="Vuex">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="increaseInComponent">Add 4</button>
    <change-count></change-count>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCount from './components/ChangeCount.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCount,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    ...mapGetters(['userIsAuthenticated']),
  },
  methods: {
    // namespaced 사용 적용 방법과 사용 방법
    ...mapActions('counterModule', ['increase', 'increment']),
    // ...mapActions({
    //   // change name, propsName: 'getterName'
    //   inc: 'counterModule/increase',
    //   hoho: 'counterModule/increment',
    // }),
    ...mapActions('counterModule', {
      // change name, propsName: 'getterName'
      inc: 'increase',
      hoho: 'increment',
    }),
    increaseInComponent() {
      this.increase();
      this.increment({ value: 2 });
      this.inc();
      this.hoho({ value: 2 });

      // this.$store.dispatch('increase');
      // this.$store.dispatch('increment', { value: 2 });
      // 스토어 안에 존재하는 state를 직접 변경하는 것은 좋은 방법이 아니다.
      // this.$store.commit('increaseCount', { value: 4 });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
