<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <ul v-else>
        <p v-if="this.error">{{ error }}</p>
        <p v-else-if="results.length === 0">
          No stored experiences found. Start adding some survey results first.
        </p>
        <survey-result
          v-else
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return { results: [], isLoading: false, error: null };
  },
  mounted() {
    this.fetchAllExperiences();
  },
  methods: {
    loadExperiences() {
      this.fetchAllExperiences();
    },
    fetchAllExperiences() {
      this.isLoading = true;
      this.error = null;
      fetch(
        'https://vue-http-demo-37664-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json'
      )
        .then((response) => {
          if (!response.ok) {
            return;
          }
          return response.json();
        })
        .then((data) => {
          const results = [];
          for (let key in data) {
            results.push({
              id: key,
              ...data[key],
            });
          }
          this.results = results;
        })
        .catch(() => {
          this.error = 'Failed to fetch data - please try again later.';
        })
        .finally(() => {
          this.isLoading = false;
        });
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
</style>
