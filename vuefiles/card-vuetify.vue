<template>
  <v-card class="w3-margin w3-col sm11 m10 l5" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="card-icon-box w3-padding">
          <svg v-bind:viewbox="viewbox" width="40" height="40" class="icon">
            <use v-bind:xlink:href="icon" />
          </svg>
        </div>
        <v-list-item-title class="headline mb-1">{{ title }}</v-list-item-title>
        <v-list-item-subtitle> </v-list-item-subtitle>
        <p>{{ excerpt }}</p>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn :to="{ name: 'id', params: { id: id } }" text>Learn More</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    excerpt: String,
    id: Number,
    icon: String,
    viewbox: String
  }
};
</script>

<style scoped>
.card-icon-box {
  background-color: #007977;
  background-image: linear-gradient(to right, #007977, #ebffff);
}
</style>
