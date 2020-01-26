<template>
  <div>
    <object id="pdfviewer" v-bind:data="pdfurl"></object>
  </div>
</template>

<script>
export default {
  computed: {
    pdfurl() {
      return "/pdf/" + this.$route.params.pdf;
    }
  }
};
</script>

<style scoped>
#pdfviewer {
  width: 100%;
  height: 90vh;
}
</style>