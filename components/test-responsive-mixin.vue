<template>
  <div :class="['post__item', { small: el.is.small }]">
    <img class="post__image" :src="post.image" />
    <div class="post__text">{{ post.text }}</div>
  </div>
</template>

<script>
import { ResponsiveMixin } from "vue-responsive-components";

export default {
  props: ["post"],
  mixins: [ResponsiveMixin],
  breakpoints: {
    small: el => el.width <= 500
  }
};
</script>