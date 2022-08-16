<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="showGoal">{{ courseGoal }}</h3>
  <h3 v-if="refShowGoal.show">{{ refGoal.goal }}</h3>
  <h3 v-if="reactiveShowGoal.show">{{ reactiveGoal.goal }}</h3>
  <h3 v-if="toRefsshowGoal.show">{{ toRefsGoal.goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { ref, reactive, toRefs } from 'vue';

export default {
  setup() {
    const courseGoal = ref('OUTPUT COURSE GOAL');
    const refGoal = ref({ goal: 'OUTPUT COURSE GOAL' });
    const reactiveGoal = reactive({ goal: 'OUTPUT COURSE GOAL' });
    const toRefsGoal = toRefs(reactiveGoal);
    const showGoal = ref(true);
    const refShowGoal = ref({ show: true });
    const reactiveShowGoal = reactive({ show: true });
    const toRefsshowGoal = toRefs(reactiveShowGoal);
    function toggleGoal() {
      this.showGoal = !this.showGoal;
      this.refShowGoal.show = !this.refShowGoal.show;
      this.reactiveShowGoal.show = !this.reactiveShowGoal.show;
      this.toRefsshowGoal.show = !this.toRefsshowGoal.show;
      console.log('showGoal', this.showGoal);
      console.log('refShowGoal', this.refShowGoal);
      console.log('reactiveShowGoal', this.reactiveShowGoal);
      console.log('toRefsshowGoal', this.toRefsshowGoal);
    }
    return {
      courseGoal,
      refGoal,
      reactiveGoal,
      toRefsGoal,
      showGoal,
      refShowGoal,
      reactiveShowGoal,
      toRefsshowGoal,
      toggleGoal,
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
