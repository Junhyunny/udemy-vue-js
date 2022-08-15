<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <base-spinner v-if="isLoading"></base-spinner>
      <ul v-else-if="hasRequests">
        <request-item
          v-for="request in receivedRequests"
          :key="request.id"
          :id="request.id"
          :email="request.userEmail"
          :message="request.message"
        >
        </request-item>
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
import BaseSpinner from '../../components/ui/BaseSpinner.vue';

export default {
  components: { RequestItem, BaseSpinner },
  created() {
    this.$store.dispatch('requests/fetchContacts');
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
