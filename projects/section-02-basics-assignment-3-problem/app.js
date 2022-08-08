Vue.createApp({
  data() {
    return {
      timer: null,
      number: 0,
      result: "Not there yet",
    };
  },
  watch: {
    number(value, oldValue) {
      if (value <= 37) {
        return;
      }
      if (this.timer) {
        console.log("timer already run");
        return;
      }
      this.result = "Too Much!";
      let context = this;
      this.timer = setTimeout(() => {
        console.log("timer finish");
        context.timer = null;
        context.number = 0;
        context.result = "Not there yet";
      }, 5000);
    },
  },
  methods: {
    add(number) {
      this.number += number;
    },
  },
}).mount("#assignment");
