<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm,
  },
  methods: {
    saveData(formData) {
      this.$store.dispatch('coaches/registerCoach', formData);
      // push and replace 차이
      // this.$router.push('/coaches');
      // this.$router.replace('/coaches');
      this.$router.back();
    },
  },
};
</script>
