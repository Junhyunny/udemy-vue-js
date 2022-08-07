<template>
  <!-- <h2>{{ friend.name }}</h2>
  <button @click="toggleDetailsAreVisible">
    {{ detailsAreVisible ? "Hide" : "Show" }} Details
  </button>
  <ul v-if="detailsAreVisible">
    <li><strong>Phone:</strong>{{ friend.phone }}</li>
    <li><strong>Email:</strong>{{ friend.email }}</li>
  </ul> -->
  <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
  <button @click="toggleFavoriteFriend">Toggle Favorite</button>
  <button @click="toggleDetailsAreVisible">
    {{ detailsAreVisible ? "Hide" : "Show" }} Details
  </button>
  <ul v-if="detailsAreVisible">
    <li><strong>Phone:</strong>{{ phoneNumber }}</li>
    <li><strong>Email:</strong>{{ emailAddress }}</li>
  </ul>
</template>

<script>
export default {
  name: "FriendContact",
  // 부모 컴포넌트에서 emit 이벤트를 지정해줬지만 아래에서 별도로 선언 없이 그냥 사용해서 발생하는 에러
  // [Vue warn]: Extraneous non-emits event listeners (toggleFavorite) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.
  // recommend kebab case vue.js <https://vuejs.org/guide/components/events.html#emitting-and-listening-to-events>
  // https://vuejs.org/guide/components/events.html#declaring-emitted-events
  // which custom events exists
  // emits: ["toggle-favorite"],
  emits: {
    "toggle-favorite": function (id) {
      if (id) {
        return true;
      }
      return false;
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      // isFavoriteFriend: this.isFavorite,
    };
  },
  // props: {
  //   friend: {
  //     id: String,
  //     name: String,
  //     phone: String,
  //     email: String,
  //   },
  // },
  props: {
    // "friend",
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      tyep: String,
      required: false,
    },
    isFavorite: {
      type: Boolean,
      requried: false,
      default: false,
    },
  },
  // props: [
  //   // "friend",
  //   "name",
  //   "phoneNumber",
  //   "emailAddress",
  // ],
  methods: {
    toggleDetailsAreVisible() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavoriteFriend() {
      // this.isFavoriteFriend = !this.isFavoriteFriend;
      // built in method in vue component
      // events it is always kebab case
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
