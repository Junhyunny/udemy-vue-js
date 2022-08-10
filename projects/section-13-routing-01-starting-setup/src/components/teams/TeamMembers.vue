<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <!-- same path로 이동하는 경우 리렌더링이 발생하지 않는다. -->
    <router-link to="/teams/t2">Go to team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  props: ['teamId'],
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: null,
      members: [],
    };
  },
  created() {
    console.log(this.$route);
    // const teamId = this.$route.params.teamId;
    this.loadTeamMembers(this.teamId);
  },
  methods: {
    loadTeamMembers(teamId) {
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        const selectedMember = this.users.find((user) => user.id === member);
        selectedMembers.push(selectedMember);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
  beforeRouteUpdate(to, from, next) {
    console.log('TeamMembers component');
    next();
  },
  watch: {
    // watch 속성으로 props도 사용 가능
    teamId(newTeamId) {
      // const teamId = route.params.teamId;
      // if (!teamId) {
      //   return;
      // }
      console.log('change route', newTeamId);
      this.loadTeamMembers(newTeamId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
