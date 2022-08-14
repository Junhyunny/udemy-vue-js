<template>
  <h3>{{ counter }}</h3>
</template>

<script>
export default {
  computed: {
    counter() {
      //   return this.$store.state.count;
      // return this.$store.getters.getCounter;
      return this.$store.getters['counterModule/getCounter'];
    },
  },
};
</script>
