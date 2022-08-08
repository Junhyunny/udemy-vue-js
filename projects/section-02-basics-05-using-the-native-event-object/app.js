const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullname: "",
    };
  },
  watch: {
    // data에서 반환하는 state와 이름이 같아야 한다.
    name(value, oldValue) {
      console.log("automatically change", value, oldValue);
      this.fullname = value;
    },
    counter(value, oldValue) {
      console.log("counter", value, oldValue);
      if (value > 50) {
        this.counter = 0;
      }
    },
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
