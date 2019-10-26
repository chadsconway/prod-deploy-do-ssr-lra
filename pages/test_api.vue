<template>
  <div id="resource">
    <b-alert show variant="info">
      {{ data_msg }}
    </b-alert>
    <hr />
    <b-alert show variant="success">
      {{ async_msg }}
    </b-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data_msg: "message in data"
    };
  },
  asyncData() {
    return {
      async_msg: "message in data"
    };
  }
};
</script>

<style>
</style>