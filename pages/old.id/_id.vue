<template>
  <div>
    <b-card>
      <p>pages/id/_id.vue</p>
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