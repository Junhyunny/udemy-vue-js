<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
  provide() {
    return {
      isLoggedIn: this.isLoggedIn,
      // products: this.products,
      // cart: this.cart,
      // addProductToCart: this.addProductToCart,
      // removeProductFromCart: this.removeProductFromCart,
      login: this.login,
      logout: this.logout,
    };
  },
  methods: {
    // addProductToCart(productData) {
    //   this.$store.dispatch('cart/addProductToCart', { productData });
    // },
    // removeProductFromCart(prodId) {
    //   this.$store.dispatch('cart/removeProductFromCart', { prodId });
    // },
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
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
