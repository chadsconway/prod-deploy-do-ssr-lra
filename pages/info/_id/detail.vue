<template>
  <div class="w3-container">
    <card-vuetify-detail
      v-bind:title="$store.state.detailsArray[$route.params.id].title"
      v-bind:content="$store.state.detailsArray[$route.params.id].content"
      v-bind:icon="$store.state.detailsArray[$route.params.id].icon"
      v-bind:viewbox="$store.state.detailsArray[$route.params.id].viewbox"
    >
    </card-vuetify-detail>
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
}
</style>
