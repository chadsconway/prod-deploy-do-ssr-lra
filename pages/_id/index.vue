<template>
  <div>
    <b-card>
      <p>pages/_id/index.vue</p>
      <b-alert show variant="primary">
        <b>ID:</b>
        <b>{{ $route.params.id }}</b>
      </b-alert>
    </b-card>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Dynamic Route"
    };
  }
};
</script>

<style>
</style>