<template>
  <div>
    <div class="w3-display-container">
      <v-img src="img/still_from_video.png" max-height="450"></v-img>
    </div>
    <div class="w3-container">
      <div class="row">
        <card-vuetify
          v-for="detail in $store.state.detailsArray"
          v-bind:key="detail.id"
          v-bind:title="detail.title"
          v-bind:excerpt="detail.excerpt"
          v-bind:icon="detail.icon"
          v-bind:viewbox="detail.viewbox"
        >
        </card-vuetify>
      </div>
    </div>
  </div>
</template>

<script>
import cardVuetify from "@/components/card-vuetify";
export default {
  components: {
    cardVuetify
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
