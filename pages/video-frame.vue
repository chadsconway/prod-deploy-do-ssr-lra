<template>
  <section class="container">
    <!-- Card image -->

    <div class="view view-cascade overlay" id="videobox">
      <iframe
        src="https://www.youtube.com/embed/y6m9xR_t4mU?rel=0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <!-- Card content -->
    <div class="card mb-3 shadow text-center z-depth-3" id="textbox">
      <!-- Title -->
      <h4 class="card-title">
        <strong>Founders Frank and Trudy Bonack</strong>
      </h4>
      <!-- Subtitle -->
      <h6 class="font-weight-bold indigo-text py-2">
        Video Explaining the Living Rosary
      </h6>
      <!-- Text -->
      <p class="card-text">
        Join us in prayer, join us in peace, join us,
        <strong>The Living Rosary Apostolate.</strong> <br />We are worldwide,
        with registered Apostolate Members in over 70 countries!
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  width: 100vw;
}
iframe {
  width: 100%;
  height: 80vh;
}
#videobox {
  width: 100%;
  z-index: 10;
  justify-content: center;
}
#textbox {
  margin-left: 4%;
  margin-right: 4%;
  margin-top: -30px;

  z-index: 10;
}
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}
</style>