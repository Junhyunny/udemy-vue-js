<template>
  <base-dialog :show="!!error" title="Error Message" @close="closeModal">
    <p>{{ error }}</p>
  </base-dialog>
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
import BaseDialog from '../../components/ui/BaseDialog.vue';

export default {
  data() {
    return {
      error: null,
    };
  },
  components: { RequestItem, BaseSpinner, BaseDialog },
  created() {
    this.fetchContacts();
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
  methods: {
    async fetchContacts() {
      try {
        await this.$store.dispatch('requests/fetchContacts');
      } catch (error) {
        this.error = error;
      }
    },
    closeModal() {
      this.error = null;
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
