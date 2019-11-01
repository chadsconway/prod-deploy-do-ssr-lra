<template>
  <v-card class="w3-card-4">
    <header class="w3-container w3-theme-d1">
      <h3>Featured</h3>
    </header>
    <div class="w3-container w3-padding-16">
      <h5 class="card-title"><slot name="title"></slot></h5>
      <p class="card-text">
        <slot name="excerpt"></slot>
      </p>
    </div>
    <footer class="w3-container w3-theme-d3 w3-padding">
      Read more about <slot name="title"></slot>
    </footer>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>