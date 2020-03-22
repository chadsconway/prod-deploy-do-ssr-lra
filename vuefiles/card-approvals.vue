<template>
  <div class="w3-container">
    <div class="approval-card w3-margin">
      <b-card-group deck>
        <b-card :title="author" class="w3-theme-d3">
          <b-card-text> {{ church }}, {{ location }} </b-card-text>
          <nuxt-link
            v-bind:to="{
              name: 'pdf-viewpdf',
              params: { pdf: pdfurl }
            }"
            class="w3-theme-d5 w3-padding"
          >
            Open Letter
          </nuxt-link>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: String,
    church: String,
    location: String,
    pdfurl: String
  }
};
</script>

<style scoped>
</style>