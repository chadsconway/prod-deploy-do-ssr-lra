<template>
  <div>
    <b-card>
      <p>pages/_id/index.vue</p>
      <b-alert show variant="primary">
        <b>ID:</b>
        <b>{{ $route.params.id }}</b>
        <hr />
        <nuxt-link
          v-bind:to="{ name: 'id-detail', params: { id: $route.params.id } }"
        >
          Detail Page
        </nuxt-link>
      </b-alert>
    </b-card>
    <b-card>
      {{ $store.state.detailsArray[$route.params.id].content }}
    </b-card>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Dynamic Route"
    };
  },
  props: {}
};
</script>

<style>
</style>