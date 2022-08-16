<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
  <h3>{{ providedAge }}</h3>
</template>

<script>
import { computed, inject } from 'vue';

export default {
  props: ['firstName', 'lastName', 'age'],
  setup(props, _context) {
    console.log(_context);
    const userName = computed(function () {
      return props.firstName + ' ' + props.lastName;
    });

    // _context.emit(); // this.$emit()

    const providedAge = inject('providedAge');

    return {
      userName,
      providedAge,
    };
  },
  // computed: {
  //   userName() {
  //     return this.firstName + ' ' + this.lastName;
  //   },
  // },
};
</script>
