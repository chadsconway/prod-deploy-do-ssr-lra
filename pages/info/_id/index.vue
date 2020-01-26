<template>
  <div class="w3-container">
    <b-alert show variant="danger">Page not found</b-alert>
  </div>
</template>

<script>
import cardVuetifyDetail from "@/components/card-vuetify-detail";
export default {
  components: {
    cardVuetifyDetail
  }
};
</script>

<style scoped>
.w3Container {
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
}
</style>
