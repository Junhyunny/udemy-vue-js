<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="increase">Add 4</button>
    <change-count></change-count>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCount from './components/ChangeCount.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCount,
  },
  methods: {
    increase() {
      // 스토어 안에 존재하는 state를 직접 변경하는 것은 좋은 방법이 아니다.
      this.$store.commit('increaseCount', { value: 4 });
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
