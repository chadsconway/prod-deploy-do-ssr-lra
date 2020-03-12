<template>
  <div id="mainelement" class="w3-container">
    <slot />
  </div>
</template>

<script>
import Vue from "vue";
import Vuetify from "vuetify";
export default {
  data() {
    return {
      sidenavIsHid: false
    };
  }
};
</script>

<style scoped>
#mainelement {
  position: relative;
  display: inline-flex;
  padding-top: 60px;
  padding-bottom: 55px;
  transition: 0.5s;
  overflow-x: hidden;
}

.addPaddingLeft {
  padding-left: 60px;
}

.slideOver {
  margin-left: 200px;
}

.startPos {
  margin-left: 60px;
}
</style>