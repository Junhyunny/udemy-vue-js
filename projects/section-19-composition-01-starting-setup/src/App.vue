<template>
  <section class="container">
    <!-- do not ref value directly. vue automatically read  -->
    <!-- <h2>{{ userName.value }}</h2> -->
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <p>{{ user }}</p>
    <p>{{ reactiveUser }}</p>
    <button @click="changeAge(4)">Change Age</button>
    <div>
      <p>{{ fullName }}</p>
      <user-data
        :first-name="firstName"
        :last-name="lastName"
        :age="age"
      ></user-data>
    </div>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Middle Name" ref="middleNameInput" />
      <input type="text" placeholder="Last Name" @input="setLastName" />
      <button @click="setMiddleName">Set Middle Name</button>
    </div>
  </section>
</template>

<script>
// composition api
import { ref, reactive, isReactive, isRef, toRefs, computed, watch } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    UserData,
  },
  // enable on vue3
  setup() {
    // ref call inside setup
    // why do we need ref function
    // for all kinds of object, string, boolean, number etc
    const userName = ref('Maximilian');
    const age = ref(31);
    const user = ref({
      userName: 'max',
      age: 31,
    });
    // reactive only use for object
    const reactiveUser = reactive({
      userName: 'max',
      age: 31,
    });
    // Proxy 객체는 isReactive true
    // Proxy 객체를 감싼 Wrapper Object는 isRef tru
    console.log(user, reactiveUser);
    console.log('is check isRef', isRef(user));
    console.log('is check isRef', isRef(user.value));
    console.log('is check isRef', isRef(reactiveUser));
    console.log('is check isReactive', isReactive(user));
    console.log('is check isReactive', isReactive(user.value));
    console.log('is check isReactive', isReactive(reactiveUser));

    // reactive object to refobject
    const refsUser = toRefs(reactiveUser);
    console.log(refsUser);
    console.log('is check isRef', isRef(refsUser));
    console.log('is check isRef', isRef(refsUser.value));
    console.log('is check isReactive', isReactive(refsUser));
    console.log('is check isReactive', isReactive(refsUser.value));

    setTimeout(() => {
      // vue watch it made by ref function and pick up changes
      userName.value = 'Max';
      age.value = 32;
      // working
      user.value.userName = 'Maxxxxxxx';
      user.value.age = 32;
      // working
      // user.value = {
      //   userName: 'Maxxxxx',
      //   age: 32,
      // };
      // working
      reactiveUser.userName = 'Maxxxxxxx';
      reactiveUser.age = 32;

      refsUser.userName = 'Maxxxxxxx';
      refsUser.age = 32;
    }, 2000);
    // return {
    //   userName,
    //   age,
    // };
    function changeAge(value) {
      this.age += value;
    }

    const firstName = ref('');
    const middleName = ref('');
    const middleNameInput = ref(null);
    const lastName = ref('');

    // age change
    watch(refsUser.age, function (newValue, oldValue) {
      console.log('refsUser.age watch for age', newValue, oldValue);
    });

    watch([firstName, lastName], function (newValues, oldValues) {
      console.log('[firstName, lastName] watch for age', newValues, oldValues);
    });

    function setFirstName(event) {
      this.firstName = event.target.value;
    }

    function setLastName(event) {
      this.lastName = event.target.value;
    }

    const fullName = computed(function () {
      return firstName.value + ' ' + middleName.value + ' ' + lastName.value;
    });

    function setMiddleName() {
      // console.log('setMiddleName', middleNameInput.value.value);
      // do not work
      // middleName.value = this.$refs.middleNameInput.value;
      middleName.value = middleNameInput.value.value;
    }

    return {
      // userName: user.value.userName,
      // age: user.value.age,
      userName: refsUser.userName,
      age: refsUser.age,
      user,
      reactiveUser,
      changeAge,
      firstName,
      lastName,
      setFirstName,
      setLastName,
      fullName,
      middleNameInput,
      setMiddleName,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
