<template>
  <!-- vue2 에서는 template 하위에 하나의 root element가 필요했다. -->
  <!-- vue3 에서는 template 하위에 반드시 하나의 root element가 필요 없다. -->
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manual Goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->

    <!-- provided by vue framework -->
    <!-- render component using component name -->
    <!-- keep-alive cache state of component behinde scene -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>

    <!-- <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2> -->
    <!-- 강의에서는 camel로 변경된다고 하지 않았지만, camel로 자동 변경된다. -->
    <!-- <p>{{ slotProps["anotherProps"] }}</p>
      </template>
    </course-goals> -->
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import CourseGoals from "./components/CourseGoal.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  // Vue automatically parse CamelCase to kebab-case
  components: {
    // "the-header": TheHeader,
    TheHeader,
    // BadgeList,
    // UserInfo,
    // CourseGoals,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(component) {
      this.selectedComponent = component;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
