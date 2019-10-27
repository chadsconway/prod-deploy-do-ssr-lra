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
import axios from "axios";
export default {
  data() {
    return {
      data_msg: "message in data"
    };
  },
  async asyncData(context) {
    try {
      const response = await axios.get("http://localhost:9000/api/test");
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