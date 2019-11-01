<template>
  <v-bottom-navigation
    class="w3-theme-d3 w3-container w3-hide-medium w3-hide-large"
    style="position:fixed;z-index:40"
  >
    <v-btn v-bind:class="navClasses">
      <span>Home</span>
      <svg viewBox="0 0 310 310" width="20" height="20" class="icon">
        <use xlink:href="#church" />
      </svg>
    </v-btn>

    <v-btn v-bind:class="navClasses">
      <span>Details</span>
      <svg viewBox="0 0 512 512.00027" width="20" height="20" class="icon">
        <use xlink:href="#bracelet" />
      </svg>
    </v-btn>

    <v-btn v-bind:class="navClasses">
      <span>Resources</span>
      <svg viewBox="0 0 52 60" width="20" height="20" class="icon">
        <use xlink:href="#christian" />
      </svg>
    </v-btn>
    <v-btn v-bind:class="navClasses">
      <span>Resources</span>
      <svg viewBox="0 0 52 60" width="20" height="20" class="icon">
        <use xlink:href="#christian" />
      </svg>
    </v-btn>
    <v-btn v-bind:class="navClasses">
      <span>Resources</span>
      <svg viewBox="0 0 52 60" width="20" height="20" class="icon">
        <use xlink:href="#christian" />
      </svg>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  data() {
    return {
      navClasses: "w3-theme-d3"
    };
  }
};
</script>
<style scoped>
</style>