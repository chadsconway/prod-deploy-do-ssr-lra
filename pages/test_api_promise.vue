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
  asyncData(context) {
    // two ways - First Promise:
    return axios
      .get("http://localhost:9000/api/test")
      .then(res => {
        return res.data;
      })
      .catch(error => {
        // two ways to handle,
        // one, send to error page: I don't have custom error page
        // context.error({
        //   message: "ajax problem, error"

        // Second way redirect to a different page,
        // here redirecting to home page:
        context.redirect("/");
      });
  }
};
</script>

<style>
</style>