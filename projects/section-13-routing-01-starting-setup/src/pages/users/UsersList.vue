<template>
  <button @click="confirm">confirm</button>
  <button @click="save">save</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    confirm() {
      // do something
      this.$router.push('/teams');
    },
    save() {
      this.isSaved = true;
    },
  },
  data() {
    return {
      isSaved: false,
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log('user list before enter in UserList component');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('user list before leave in UserList component');
    console.log(to, from);
    if (!this.isSaved) {
      // prompt maybe web api
      // const userWantsToLeave = prompt('Are you sure? You got unsaved changes!');
      const userWantsToLeave = confirm(
        'Are you sure? You got unsaved changes!'
      );
      next(userWantsToLeave);
    } else {
      next();
    }
  },
  unmounted() {
    console.log('unmounted user list component');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
