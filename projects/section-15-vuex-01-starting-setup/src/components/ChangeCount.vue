<template>
  <button @click="increaseOne">Add 1</button>
</template>

<script>
export default {
  methods: {
    increaseOne() {
      this.$store.commit('increaseCount');
    },
  },
};
</script>
