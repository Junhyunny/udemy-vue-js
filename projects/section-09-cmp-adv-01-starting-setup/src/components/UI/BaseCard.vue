<template>
  <div>
    <!-- childElement -->
    <header>
      <!-- name is upto me, define in parent component using v-slot -->
      <slot name="header">
        <!-- not visible when slot is exists, this is fallback plan -->
        <h2>The Default</h2>
      </slot>
    </header>
    <!-- unnamed slot is default -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    // this.$slots can know what data giving
    console.log(this.$slots.header);
  },
};
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
