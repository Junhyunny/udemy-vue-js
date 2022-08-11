const app = Vue.createApp({
    // data property must be function
    data() {
        // always return object
        return {
            courseGoalA: "Finish the course and learn Vue",
            // not-safe about xss attack
            // courseGoalB: "<img src=x onerror=alert(1)>",
            courseGoalB: "<h2>Master Vue and build amazing apps</h2>",
            vueLink: "https://kr.vuejs.org/",
            goals: ["Master Vue", "Hello World"],
        };
    },
    methods: {
        // 일반 함수가 아니라, arrow function인 경우 data 함수가 반환하는 state 객체를 찾지 못한다.
        outputGoal() {
            // this 키워드가 없는 경우 참조할 수 없다는 에러가 발생한다.
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        },
    },
});

app.mount("#user-goal");
