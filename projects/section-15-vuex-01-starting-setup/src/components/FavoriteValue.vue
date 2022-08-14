<template>
  <h3>{{ normalizedCounter }}</h3>
  <p>We do more...</p>
</template>

<script>
// mapGetters
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['normalizedCounter']),
  },
};
</script>
