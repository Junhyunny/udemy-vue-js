<template>
  <div>
    <base-dialog :show="!!error" title="Error Message" @close="closeModal">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email"> E-Mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password"> Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p v-if="!formIsValid">
          Please enter a valid email and password. (must be at least 6
          characters long)
        </p>
        <base-button>{{ submitButtonCaption }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">
          {{ switchModeButtonCaption }}
        </base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
import BaseSpinner from '../../components/ui/BaseSpinner.vue';
import BaseDialog from '../../components/ui/BaseDialog.vue';

import { mapGetters } from 'vuex';

export default {
  components: { BaseSpinner, BaseDialog },
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      error: null,
    };
  },
  computed: {
    ...mapGetters(['isLoading']),
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'Signup';
      }
    },
    switchModeButtonCaption() {
      if (this.mode === 'login') {
        return 'Signup instead';
      } else {
        return 'Login instead';
      }
    },
  },
  methods: {
    closeModal() {
      this.error = null;
    },
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      try {
        // send http request
        const user = {
          email: this.email,
          password: this.password,
        };
        if (this.mode === 'login') {
          await this.$store.dispatch('login', user);
        } else {
          await this.$store.dispatch('signup', user);
        }
        const redirectUrl = `/${this.$route.query.redirect || 'coaches'}`;
        this.$router.replace(redirectUrl);
      } catch (error) {
        this.error = error.message || 'Failed to authenticate, try later.';
      }
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
