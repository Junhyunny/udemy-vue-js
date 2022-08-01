Vue.createApp({
  data() {
    return {
      className: "user1",
      visible: true,
      backgroundColor: "",
    };
  },
  methods: {
    changeUserStyle() {
      this.visible = !this.visible;
    },
  },
}).mount("#assignment");
