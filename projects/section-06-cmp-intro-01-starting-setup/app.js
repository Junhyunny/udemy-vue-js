const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manual",
          name: "Manuel Lorenz",
          phone: "010 1234 1234",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "010 8328 9819",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

// component is custom HTML Tag
app.component("friend-contact", {
  template: `
  <h2>{{friend.name}}</h2>
  <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
  <ul v-if="detailsAreVisible">
    <li><strong>Phone:</strong> {{friend.phone}}</li>
    <li><strong>Email:</strong> {{friend.email}}</li>
  </ul>
  `,
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  props: {
    friend: {
      name: String,
      phone: String,
      email: String,
    },
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
app.mount("#app");
