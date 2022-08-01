const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmeInput() {
      this.confirmedName = this.name;
    },
    add(number = 1) {
      console.log("add", number);
      this.counter = this.counter + number;
    },
    remove(number = 1) {
      console.log("remove", number);
      this.counter = this.counter - number;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    submitForm(event) {
      // 새로운 페이지 요청이 되지 않도록 막는 메소드
      // event.preventDefault();
      alert("hello");
    },
  },
});

app.mount("#events");
