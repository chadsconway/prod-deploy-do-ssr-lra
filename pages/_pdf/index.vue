<template>
  <div>
    <b-card>
      <p>pages/approvals/_pdf/index - Error Page</p>
      <b-alert show variant="danger">
        <b>ID:</b>
        <b>{{ $route.params.approvals }}</b>
        <hr />
        <nuxt-link
          v-bind:to="{
            name: 'approvals-detail',
            params: { id: $route.params.approvals }
          }"
        >
          Detail Page
        </nuxt-link>
      </b-alert>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>