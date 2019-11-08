<template>
  <div
    id="mainelement"
    v-bind:class="{ slideOver: sidebarOpen }"
    class="w3-display-container"
  >
    <slot />
  </div>
</template>

<script>
import Vue from "vue";
import Vuetify from "vuetify";
export default {
  computed: {
    // sidenav status getter
    sidebarOpen: function() {
      return this.$store.state.sidebarOpen;
    }
    /* 
   mainPaddingLeft: function() {
      console.log(
        "main.vue computed padding-left with $vuetify breakpoint: ",
        $Vuetify.breakpoint.hiddenSmAndDown
      );
      return $Vuetify.breakpoint.hiddenSmAndDown;
    }
    */
  }
};
</script>

<style scoped>
#mainelement {
  padding-bottom: 55px;
  padding-left: 60px;
  z-index: 10;
  transition: 0.5s;
  overflow-x: hidden;
}

.slideOver {
  margin-left: 200px;
}

.startPos {
  margin-left: 60px;
}
</style>