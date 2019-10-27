<template>
  <div class="container">
    <b-jumbotron
      header="NuxtServerInit Testing"
      lead="The following message and id are axiosed at first loading"
    >
      <p>{{ $store.state.serverinitmessage }}</p>
      <p>{{ $store.state.serverinitid }}</p>
      <b-button variant="primary" href="#">More Info</b-button>
    </b-jumbotron>
    <div>
      <h1 class="title">
        The Living Rosary Apostolate
      </h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
