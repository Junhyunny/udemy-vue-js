Vue.createApp({
  data() {
    return {
      output: "",
      confirmedOutput: "",
    };
  },
  methods: {
    showAlert() {
      alert("Hello World");
    },
    keydownEvent(event) {
      this.output = event.target.value;
    },
    confirmKeydownEvent(event) {
      this.confirmedOutput = event.target.value;
    },
  },
}).mount("#assignment");
