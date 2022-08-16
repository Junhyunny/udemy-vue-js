<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
  <h3>{{ providedAge }}</h3>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

export default {
  props: ['firstName', 'lastName', 'age'],
  setup(props, _context) {
    console.log(_context);
    const userName = computed(function () {
      return props.firstName + ' ' + props.lastName;
    });

    // _context.emit(); // this.$emit()

    const providedAge = inject('providedAge');

    onBeforeMount(function () {
      console.log('onBeforeMount');
    });
    onMounted(function () {
      console.log('onMounted');
    });
    onBeforeUpdate(function () {
      console.log('onBeforeUpdate');
    });
    onUpdated(function () {
      console.log('onUpdated');
    });
    onBeforeUnmount(function () {
      console.log('onBeforeUnmount');
    });
    onUnmounted(function () {
      console.log('onUnmounted');
    });

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
