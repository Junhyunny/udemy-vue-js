Vue.createApp({
  data() {
    return {
      name: "Junhyunny",
      age: 32,
      imageSource:
        "https://www.google.com/webhp?hl=ko&sa=X&ved=0ahUKEwiPvPSQhKX5AhWjyDgGHacNCT8QPAgI",
      typedValue: "Good Game!",
    };
  },
  methods: {
    computedAge() {
      return this.age + 5;
    },
  },
}).mount("#assignment");
