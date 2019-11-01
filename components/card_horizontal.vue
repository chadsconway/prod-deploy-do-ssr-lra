<template>
  <v-card max-width="400" class="mx-auto">
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card class="w3-theme-d4">
            <v-card-title class="headline">Main Title</v-card-title>

            <v-card-subtitle>
              Listen to your favorite artists and albums whenever and wherever,
              online and offline.
            </v-card-subtitle>

            <v-card-actions>
              <v-btn text>Go Somewhere</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({}),
  mounted() {
    console.log(this.$vuetify.breakpoint);
  }
};
</script>

<style>
</style>