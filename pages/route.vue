<template>
  <div>
    <b-card>
      <p>pages/route.vue</p>
      <b-alert show variant="primary">
        <span>http://localhost:8000/route</span>
      </b-alert>
    </b-card>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "pages/route.vue"
    };
  }
};
</script>

<style>
</style>