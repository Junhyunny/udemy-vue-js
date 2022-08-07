<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetailsAreVisible">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ friend.phone }}</li>
      <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "FriendContact",
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  props: {
    friend: {
      id: String,
      name: String,
      phone: String,
      email: String,
    },
  },
  methods: {
    toggleDetailsAreVisible() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>
