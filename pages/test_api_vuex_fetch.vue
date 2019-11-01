<template>
  <div id="resource">
    <b-alert show variant="info">
      {{ data_msg }}
    </b-alert>
    <hr />
    <b-alert show variant="success">
      {{ message }}
    </b-alert>
    <b-alert show variant="secondary">
      {{ id }}
    </b-alert>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      data_msg: "message in data"
    };
  },
  computed: mapState({
    message: state => state.message,
    id: state => state.id
  }),
  async fetch(context) {
    return context.$axios
      .get("http://localhost:9000/api/test")
      .then(res => {
        if (res.data[0]) {
          context.store.dispatch("resetBothAsync", res.data[1]);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
</style>