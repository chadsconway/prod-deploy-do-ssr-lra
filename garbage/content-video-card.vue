<template>
  <v-card class="w3-margin w3-col sm11 m10 l5" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="card-icon-box w3-padding">
          <svg viewbox="" width="40" height="40" class="icon">
            <use xlink:href="icon" />
          </svg>
        </div>
        <v-list-item-title class="headline mb-1">
          Watch Founders Frank and Trudy Bonack</v-list-item-title
        >
        <v-list-item-subtitle>
          <iframe
            ref="videoIframe"
            src="https://www.youtube.com/embed/y6m9xR_t4mU?rel=0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope;
            picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-list-item-subtitle>
        <p>
          Watch founders Frank and Trudy Bonack as they explain This Living
          Rosary Apostolate.
        </p>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  // computed: {
  //   vidheight: function() {
  //     if (vidwidth === undefined) {
  //       return 200;
  //     } else {
  //       let vidheight = (this.vidwidth * 16) / 9;
  //       return vidheight;
  //     }
  //     return 200;
  //   }
  // },
  // mounted: function() {
  //   if (this.$refs.videoIframe.clientWidth !== undefined) {
  //     let vidwidth = this.$refs.videoIframe.clientWidth;
  //     return vidwidth;
  //   } else {
  //     return 500;
  //   }
  // }
};
</script>

<style scoped lang="scss">
.card-icon-box {
  background-color: #007977;
  background-image: linear-gradient(to right, #007977, #ebffff);
}
iframe {
  width: 100%;
}
</style>