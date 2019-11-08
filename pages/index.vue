<template>
  <div>
    <div class="w3-display-container" max-height="450px">
      <v-img
        src="img/still_from_video.png"
        height="100%"
        :aspect-ratio="3 / 1"
      ></v-img>
    </div>
    <video-frame-2 />
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
import videoFrame2 from "@/components/video-frame-2";
import contentVideoFrame from "@/components/content-video-frame";
import cardVuetify from "@/components/card-vuetify";
export default {
  components: {
    cardVuetify,
    contentVideoFrame,
    videoFrame2
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
