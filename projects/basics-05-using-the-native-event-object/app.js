const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  computed: {
    ouputFullName() {
      console.log("call ouputFullName");
      if (this.name === "") {
        return "";
      }
      return this.name;
    },
  },
  methods: {
    ouputFullNameMethod() {
      console.log("call ouputFullNameMethod");
      if (this.name === "") {
        return "";
      }
      return this.name;
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
