<template>
  <div id="main" class="w3-content">
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      navIsOut: false
    };
  }
};
</script>

<style scoped>
#main {
  position: absolute;
  padding-top: 60px;
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