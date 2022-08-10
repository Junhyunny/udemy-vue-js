<!-- https://kr.vuejs.org/v2/guide/transitions.html -->
<template>
  <router-view v-slot="slotProps">
    <transition name="page" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <div class="container">
    <user-list></user-list>
  </div>
  <div class="container">
    <!-- transition 컴포넌트로 싸여진 엘리먼트가 삽입되거나 제거 될 때 일어납니다. vue doc -->
    <div class="block"></div>
    <button @click="animate">Animate</button>
  </div>
  <div class="container">
    <!-- trasition component has only one direct child dom -->
    <!-- trasition component by vue-->
    <!-- css attribute false는 css를 사용하지 않겠다고 표시하는 것 -->
    <transition
      :css="false"
      name="para"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancel"
      @leave-cancelled="leaveCancel"
    >
      <!-- enter-to-class, enter-active-class, enter-from-class 등 속성도 존재한다. -->
      <p v-if="paraIsVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="togglePara">Toggle Paragraph</button>
  </div>
  <div class="container">
    <!-- v-if / v-else 등으로 여러 엘리먼트 중 정확하게 하나만 나올 것을 보장하면 사용 가능 -->
    <!-- mode - in - out 먼저 들어오고 이전것이 나감 / out - in, 먼저 나가고 들어옴 -->
    <transition name="fade-button" mode="out-in">
      <button @click="showUser" v-if="!usersAreVisible">Show User</button>
      <button @click="hideUser" v-else>Hide User</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
import UserList from './components/ListData.vue';

export default {
  components: { UserList },
  data() {
    return {
      animatedBlock: true,
      dialogIsVisible: false,
      paraIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log('beforeEnter', el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('enter', el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          // call enter logic is finished
          done();
          return;
        }
      }, 20);
    },
    afterEnter(el) {
      console.log('afterEnter', el);
    },
    beforeLeave(el) {
      console.log('beforeLeave', el);
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log('leave', el);
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          // call enter logic is finished
          done();
          return;
        }
      }, 20);
    },
    afterLeave(el) {
      console.log('afterLeave', el);
    },
    enterCancel() {
      console.log('enterCancel');
      clearInterval(this.enterInterval);
    },
    leaveCancel() {
      console.log('leaveCancel');
      clearInterval(this.leaveInterval);
    },
    showUser() {
      this.usersAreVisible = true;
    },
    hideUser() {
      this.usersAreVisible = false;
    },
    animate() {
      this.animatedBlock = !this.animatedBlock;
    },
    togglePara() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;

  /* make animation */
  /* all is any change, transform is only adapted  */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-150px); */
  /* fowards is keep state when animation is finished */
  animation: slide-fade 1s forwards;
}

.para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.para-enter-active {
  transition: all 0.5s;
}
.para-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.para-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.para-leave-active {
  transition: all 0.5s ease-in;
}
.para-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fade-button-enter-from {
  opacity: 0;
}
.fade-button-enter-active {
  transition: opacity 0.3s;
}
.fade-button-enter-to {
  opacity: 1;
}
.fade-button-leave-from {
  opacity: 1;
}
.fade-button-leave-active {
  transition: opacity 0.3s;
}
.fade-button-leave-to {
  opacity: 0;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }
  50% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scaleX(1);
  }
}

@keyframes slide-fade-out {
  0% {
    transform: translateX(-150px) scaleX(1);
  }
  50% {
    transform: translateX(-120px) scale(1.1);
  }
  1000% {
    transform: translateX(0) scale(1);
  }
}

.page-enter-from {
}
.page-enter-active {
  animation: slide-fade 0.4s;
}
.page-enter-to {
}
.page-leave-from {
}
.page-leave-active {
  animation: slide-fade 0.4s forwards;
}
.page-leave-to {
}
</style>
