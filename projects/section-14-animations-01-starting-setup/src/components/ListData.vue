<template>
  <!-- <ul> -->
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>
  <!-- </ul> -->
  <div>
    <input type="text" ref="userName" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Junhyunny', 'Hello', 'World', 'Jullie'],
    };
  },
  methods: {
    addUser() {
      this.users.unshift(this.$refs.userName.value);
    },
    removeUser(targetUser) {
      this.users = this.users.filter((user) => user !== targetUser);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}
.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-active {
  transition: all 0.5s;
}
.user-list-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.user-list-leave-active {
  transition: all 0.5s;
  /* position: absolute; */
}
.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
/* 아이템이 추가되고 삭제될 때 다른 엘리먼트들이 움직이는 행동에 대한 transition 설정 */
.user-list-move {
  transition: transform 0.8s ease;
}
</style>
