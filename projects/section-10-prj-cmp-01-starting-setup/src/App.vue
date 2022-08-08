<template>
  <the-header title="Remember Me" />
  <the-resources />
  <!-- <stored-resources :resources="storedResources"></stored-resources> -->
</template>

<script>
import TheHeader from './components/header/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue';
// import StoredResources from './components/learning-resources/StoredResources.vue';

export default {
  components: { TheHeader, TheResources },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The Official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google',
          link: 'https://google.com',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
