Vue.createApp({
  data() {
    return {
      buttonName: "Show List",
      taskText: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskText);
      this.taskText = "";
    },
    setHideOrShow() {
      if (this.buttonName === "Hide") {
        this.buttonName = "Show List";
      } else {
        this.buttonName = "Hide";
      }
    },
  },
}).mount("#assignment");
