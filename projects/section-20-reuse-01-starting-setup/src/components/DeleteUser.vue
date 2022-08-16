<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from './UserAlert.vue';

import alertMixin from '../mixins/alert';

export default {
  // component not shared via mixin
  components: {
    UserAlert,
  },
  mixins: [alertMixin],
  // data is merged with mixins
  data() {
    return {
      alertTitle: 'Delete the User?',
      // override by data in mixins
      alertIsVisible: true,
    };
  },
};
</script>
