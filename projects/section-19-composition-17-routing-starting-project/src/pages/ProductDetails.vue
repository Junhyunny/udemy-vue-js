<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
    <router-link :to="`/products/p2`">Product 2</router-link>
  </section>
</template>

<script>
import { inject, computed } from 'vue';
// hooks, composable
import { useRoute } from 'vue-router';

export default {
  props: ['pid'],
  setup(props) {
    const loadedProducts = inject('products');
    const product = computed(() =>
      loadedProducts.value.find((prod) => prod.id === props.pid)
    );

    const title = computed(() => product.value.title);
    const price = computed(() => product.value.price);
    const description = computed(() => product.value.description);

    const route = useRoute();
    console.log(route);
    console.log(route.params.pid);

    return { title, price, description };
  },
};
</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
