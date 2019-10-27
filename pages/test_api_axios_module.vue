<template>
  <div id="resource">
    <b-alert show variant="info">
      {{ data_msg }}
    </b-alert>
    <hr />
    <b-alert show variant="success">
      {{ message }}
      <hr />
      {{ id }}
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
  async asyncData(context) {
    try {
      // context.$axios is the only change when using
      // modules rather than importing directly
      // context.$axios is an alias for:
      // context.app.axios
      const response = await context.$axios.get(
        "http://localhost:9000/api/test"
      );
      return response.data;
    } catch (err) {
      context.error({
        message: "ajax problem"
      });
    }
  }
};
</script>

<style>
</style>