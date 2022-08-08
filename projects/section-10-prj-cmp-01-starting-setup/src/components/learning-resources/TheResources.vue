<template>
  <base-card>
    <!--  fall through - add props, attribute, event listener in custom component -->
    <!--  automatically add those props, attributes, event listeners into html element by vue -->
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResourcesMode"
    >
      Stored Resources
    </base-button>
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResourceMode"
    >
      Add Resource
    </base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  computed: {
    storedResourcesMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResourceMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  data() {
    return {
      selectedTab: 'stored-resources',
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
