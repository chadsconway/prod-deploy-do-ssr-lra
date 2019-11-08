<template>
  <div id="root">
    <div id="rectangles">
      <div class="spacer"></div>
      <div class="spacer"></div>
      <div class="w3-row rectangle" id="r1"></div>
      <div class="spacer"></div>
      <div class="w3-row rectangle" id="r2"></div>
      <div class="spacer"></div>
      <div class="w3-row rectangle" id="r3"></div>
      <div class="spacer"></div>
      <div class="w3-row rectangle" id="r4"></div>
      <div class="spacer"></div>
      <div class="w3-row rectangle" id="r5"></div>
      <div class="spacer"></div>
      <div class="w3-row rectangle" id="r6"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tintl5: "#ebffff", // w3-theme-l5
      tintl4: "#bcfffe", // w3-theme-l4
      tintl3: "#78fffd", //  w3-theme-l3
      tintl2: "#35fffc", // w3-theme-l2
      tintl1: "#00f1ed", // w3-theme-l1
      baseCol: "#00aba9", // w3-theme
      shaded1: "#009c99", // w3-theme-d1
      shaded2: "#008b88", // w3-theme-d2
      shaded3: "#007977", // w3-theme-d3
      shaded4: "#006866", // w3-theme-d4
      shaded5: "#005755" // w3-theme-d5
    };
  }
};
// #ebffff w3-theme-l5
// #bcfffe w3-theme-l4
// #78fffd w3-theme-l3
// #35fffc w3-theme-l2
// #00f1ed w3-theme-l1
// #00aba9 w3-theme
// #009c99 w3-theme-d1
// #008b88 w3-theme-d2
// #007977 w3-theme-d3
// #006866 w3-theme-d4
// #005755 w3-theme-d5
</script>

<style scoped>
.spacer {
  height: 50px;
}
#r1 {
  margin-left: 100px;
  width: 500px;
  height: 200px;
  background-image: linear-gradient(to right, #007977, #00aba9);
}
#r2 {
  margin-left: 100px;
  width: 500px;
  height: 200px;
  background-image: linear-gradient(to right, blue, darkblue);
}
#r3 {
  margin-left: 100px;
  width: 500px;
  height: 200px;
  background-image: linear-gradient(blue, red);
}
#r4 {
  margin-left: 100px;
  width: 500px;
  height: 200px;
  background-image: linear-gradient(blue, red);
}
#r5 {
  margin-left: 100px;
  width: 500px;
  height: 200px;
  background-image: linear-gradient(blue, red);
}
#r6 {
  margin-left: 100px;
  width: 500px;
  height: 200px;
  background-image: linear-gradient(blue, red);
}
</style>