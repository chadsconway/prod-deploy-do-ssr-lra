<template>
  <div>
    <div id="controls">
      <b-button variant="success" v-bind:click="testRegisterUser()"
        >Test registerUser Route</b-button
      >
    </div>
    <div id="results">{{ info }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: null
    }
  },
  methods: {
    testRegisterUser: function() {
    axios.post(url, {
        firstname: "bob",
        lastname: "bobbert",
        email: "bob@bobber.bob",
        region: "Europe",
        subject: "Please register me",
        note: "hello World"
    }).then(function(response){this.info = response})
    }
  }
);

async function sendMail(data) {
  await emailer(data);
}
sendMail(data);
    }
  }
};
</script>

<style>
</style>