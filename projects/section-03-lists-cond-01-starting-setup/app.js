const app = Vue.createApp({
  data() {
    return { goals: [], goalText: "" };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goalText);
      this.goalText = "";
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
