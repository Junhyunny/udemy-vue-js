<template>
  <h3>{{ normalizedCounter }}</h3>
  <p>We do more...</p>
</template>

<script>
// mapGetters를 사용한 값 변경
import { mapGetters } from 'vuex';

export default {
  computed: {
    // ...mapGetters(['normalizedCounter']),
    ...mapGetters('counterModule', ['normalizedCounter']),
  },
};
</script>
