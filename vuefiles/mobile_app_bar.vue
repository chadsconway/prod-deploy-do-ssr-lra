<template>
  <div>
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        dark
        scroll-target="#playground-example"
        :color="color"
        :elevate-on-scroll="elevateOnScroll"
        :hide-on-scroll="hideOnScroll"
        :fade-on-scroll="fadeOnScroll"
        :fade-img-on-scroll="fadeImgOnScroll"
        :inverted-scroll="invertedScroll"
        :collapse="collapse"
        :collapse-on-scroll="collapseOnScroll"
        :shrink-on-scroll="shrinkOnScroll"
        :extended="extended"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>This Living Rosary</v-toolbar-title>
      </v-app-bar>
      <v-sheet
        id="playground-example"
        class="overflow-y-hidden"
        max-height="56"
      >
        <v-container style="height: 56px;"> </v-container>
      </v-sheet>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      elevateOnScroll: false,
      hideOnScroll: true,
      fadeOnScroll: false,
      fadeImgOnScroll: false,
      invertedScroll: false,
      collapse: false,
      collapseOnScroll: false,
      shrinkOnScroll: false,
      extended: false,
      color: "#00aba9",
      colors: ["primary", "accent", "warning lighten-2", "teal", "orange"]
    };
  }
};
</script>

<style>
</style>