<template>
  <!-- !! make truthy to real boolean -->
  <base-dialog :show="!!error" title="Error Message" @close="closeModal">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <section>
      <coach-filter @change-filter="setFilter"></coach-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="fetchCoaches">
            Refresh
          </base-button>
          <base-button v-if="!isCoach" link to="/register">
            Register as Coach
          </base-button>
        </div>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="hasCoaches">
          <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
          >
          </coach-item>
        </ul>
        <h3 v-else>No coaches found.</h3>
      </base-card>
    </section>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import BaseSpinner from '../../components/ui/BaseSpinner.vue';
import BaseDialog from '../../components/ui/BaseDialog.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    CoachItem,
    CoachFilter,
    BaseSpinner,
    BaseDialog,
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
      error: null,
    };
  },
  mounted() {
    this.fetchCoaches();
  },
  computed: {
    ...mapGetters(['isLoading']),
    ...mapGetters('coaches', ['hasCoaches', 'isCoach']),
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
  },
  methods: {
    setFilter(updatedFilter) {
      this.activeFilters = updatedFilter;
    },
    async fetchCoaches() {
      try {
        await this.$store.dispatch('coaches/fetchCoaches');
      } catch (error) {
        // console.log(error);
        this.error = error.message;
      }
    },
    closeModal() {
      this.error = null;
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
