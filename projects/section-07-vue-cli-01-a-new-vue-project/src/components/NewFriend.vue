<template>
  <form @submit.prevent="addContact">
    <div>
      <label>Name</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label>Phone</label>
      <input type="text" v-model="phone" />
    </div>
    <div>
      <label>E-Mail</label>
      <input type="email" v-model="email" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "NewFriend",
  emits: ["add-contact"],
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    addContact() {
      this.$emit("add-contact", {
        name: this.name,
        phone: this.phone,
        email: this.email,
      });
      this.name = "";
      this.phone = "";
      this.email = "";
    },
  },
};
</script>

<style>
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
