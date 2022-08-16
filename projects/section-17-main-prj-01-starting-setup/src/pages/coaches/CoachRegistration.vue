<template>
  <div>
    <base-dialog :show="!!error" title="Error Message" @close="closeModal">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <h2>Register as a coach now!</h2>
        <coach-form @save-data="saveData"></coach-form>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
import BaseDialog from '../../components/ui/BaseDialog.vue';

export default {
  data() {
    return { error: null };
  },
  components: {
    CoachForm,
    BaseDialog,
  },
  methods: {
    closeModal() {
      this.error = null;
      this.$router.back();
    },
    async saveData(formData) {
      try {
        await this.$store.dispatch('coaches/registerCoach', formData);
        this.$router.back();
      } catch (error) {
        this.error = error.message || 'Failed to register coach.';
      }
      // push and replace 차이
      // this.$router.push('/coaches');
      // this.$router.replace('/coaches');
      // this.$router.back();
    },
  },
};
</script>
