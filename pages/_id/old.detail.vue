<template>
  <div>
    <b-card>
      <p>pages/_id/detail.vue</p>
      <b-alert show variant="info">
        <h3>Detail Page</h3>
        <b>ID:</b>
        <b>{{ $route.params.id }}</b>
        <hr />
        <nuxt-link v-bind:to="{ name: 'id', params: { id: $route.params.id } }">
          Index Page
        </nuxt-link>
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