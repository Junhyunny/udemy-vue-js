<template>
  <button @click="increaseOne">Add 2</button>
</template>

<script>
export default {
  methods: {
    increaseOne() {
      //   this.$store.commit('increaseCount', {value: 2});
      // 다른 방법으로 전달하는 commit
      this.$store.commit({
        type: 'increaseCount',
        value: 2,
      });
    },
  },
};
</script>
