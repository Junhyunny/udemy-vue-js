<template>
  <section>
    <section>FILTER</section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Coach</router-link>
    </div>
    <ul v-if="hasCoaches">
      <!-- <li v-for="coach in filteredCoaches" :key="coach.id">
        {{ coach.firstName }}
      </li> -->
      <coach-item
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :id="coach.id"
        :first-name="coach.firstName"
        :last-name="coach.lastName"
        :rate="coach.hourlyRate"
        :area="coach.areas"
      >
      </coach-item>
    </ul>
    <h3 v-else>No coaches found.</h3>
  </section>
</template>

<script>
CoachItem;
import CoachItem from '../../components/coaches/CoachItem.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    CoachItem,
  },
  computed: {
    ...mapGetters('coaches', ['hasCoaches']),
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
