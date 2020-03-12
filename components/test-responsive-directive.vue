<template>
  <!-- Will add/remove .small if the width is less / greater -->
  <div class="post__item" v-responsive="{ small: el => el.width <= 500 }">
    <img class="post__image" :src="post.image" />
    <div class="post__text">{{ post.text }}</div>
  </div>
</template>

<script>
import { ResponsiveDirective } from "vue-responsive-components";

export default {
  props: ["post"],
  directives: {
    responsive: ResponsiveDirective
  }
};
</script>