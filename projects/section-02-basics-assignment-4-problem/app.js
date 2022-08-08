Vue.createApp({
  data() {
    return {
      className: "",
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
