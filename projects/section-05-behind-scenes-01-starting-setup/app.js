const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      // this.$refs.userText 는 DOM 엘리먼트에 직접 참조를 걸어서 접근하는 방법이다.
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    // send http reqeust
    // set timer
    console.log("beforeCreate()");
  },
  created() {
    // initiallize internally
    // not mounted
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmounted()");
  },
});

app.mount("#app");

setTimeout(() => {
  // 실제로 잘 사용되지 않는 함수
  app.unmount();
}, 3000);

Vue.createApp({
  template: `
    <p>{{favoriteMeal}}</p>
  `,
  data() {
    return {
      favoriteMeal: "Pizza",
    };
  },
}).mount("#app2");

const data = {
  message: "Hello",
  longMessage: "",
};

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + " World!";
    }
    target.message = value;
  },
};
const proxy = new Proxy(data, handler);

console.log(data);

proxy.message = "Hello";

console.log(data);
