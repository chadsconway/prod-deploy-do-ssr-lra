<template>
  <div
    id="sfs"
    class="w3-teal w3-sidebar w3-bar-block w3-card w3-animate-left"
    v-on:mouseover="updateWidth('wide')"
    v-on:mouseout="updateWidth('narrow')"
    v-bind:style="{ width: navwidth }"
    v-bind:class="[isWide ? blurClass : '', bkClass]"
  >
    <iconsprite />
    <svg class="icon">
      <use xlink:href="#book" />
    </svg>
    <a href="#content" class=" w3-bar-item w3-button active">
      <svg
        id="church"
        viewBox="0 0 310 310"
        width="40"
        height="40"
        class="icon"
      >
        <use xlink:href="#church" />
      </svg>
      Home
    </a>

    <a href="#what" class=" w3-bar-item w3-button">
      <svg
        id="christian-1"
        viewBox="0 0 496 496"
        width="40"
        height="40"
        class="icon"
      >
        <use xlink:href="#christian-1" />
      </svg>
      What?
    </a>
    <a href="#how" class=" w3-bar-item w3-button">
      <svg
        id="praying-hands"
        viewBox="0 0 492.388 492.388"
        width="40"
        height="40"
        class="icon"
      >
        <use xlink:href="#praying-hands" />
      </svg>
      How?</a
    >
    <a href="#history" class=" w3-bar-item w3-button">
      <svg
        id="book"
        viewBox="0 -15 512 511"
        width="40"
        height="40"
        class="icon"
      >
        <use xlink:href="#book" />
      </svg>
      History
    </a>
    <a href="#approvals" class=" w3-bar-item w3-button">
      <svg
        id="priest"
        viewBox="0 0 300.002 300.002"
        width="40"
        height="40"
        class="icon"
      >
        <use xlink:href="priest" />
      </svg>
      Approvals
    </a>
    <a href="#testimony" class=" w3-bar-item w3-button">
      <svg
        id="testimonial"
        viewBox="0 0 512 512"
        width="40"
        height="40"
        class="icon"
      >
        <use xlink:href="#testimonial" />
      </svg>
      Testimony
    </a>

    <a href="#calendar" class=" w3-bar-item w3-button">
      <svg
        id="prayer"
        viewBox="-1 0 512.00244 512"
        width="40"
        height="40"
        class="icon"
      >
        <use xlink:href="#prayer" /></svg
      >Events
    </a>
    <a href="#donate" class=" w3-bar-item w3-button">
      <svg
        id="prayer"
        viewBox="-1 0 512.00244 512"
        width="40"
        height="40"
        class="icon"
      >
        <use xlink:href="#prayer" />
      </svg>
      Support
    </a>
    <a href="#join" class=" w3-bar-item w3-button">
      <svg
        id="network"
        viewBox="0 0 512.017 512.017"
        width="40"
        height="40"
        class="icon"
      >
        <use xlink:href="#network" />
      </svg>
      Join
    </a>
    <a href="#founders" class=" w3-bar-item w3-button">
      <svg
        id="three-candles"
        viewBox="0 0 467.963 467.963"
        width="40"
        height="40"
        class="icon"
      >
        <use xlink:href="#three-candles" />
      </svg>
      Founders
    </a>
    <a href="#Footer" class=" w3-bar-item w3-button">
      <svg
        id="prayer"
        viewBox="-1 0 512.00244 512"
        width="40"
        height="40"
        class="icon"
      >
        <use xlink:href="#prayer" />
      </svg>
      Contact Us
    </a>
  </div>
</template>

<script>
import iconsprite from "@/components/iconsprite.vue";
export default {
  components: {
    iconsprite
  },
  name: "sidenav",
  data: function() {
    return {
      bkClass: "bk",
      blurClass: "blur",
      navwidth: "60px",
      isWide: false,
      variants: [
        {
          variantId: "wide",
          variantwidth: "200px"
        },
        {
          variantId: "narrow",
          variantwidth: "60px"
        }
      ]
    };
  },
  methods: {
    updateWidth(variantId) {
      if (variantId === "wide") {
        this.navwidth = "200px";
        this.isWide = true;
      }
      if (variantId === "narrow") {
        this.navwidth = "60px";
        this.isWide = false;
      }
    }
  },

  mounted() {
    // register mousenter, mouseleave
  },
  updated() {
    //
    // adjust accordingly
    // re-register mousenter, mouseleave?
  }
};
</script>

<style scoped>
.cc-iconbox {
  width: 40px;
  position: inline;
  left: 0;
}
.sidebar {
  transition: 0.5s;
  height: 100%;
  width: 60px;
  position: fixed;
  padding-top: 60px;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow-x: hidden;
  z-index: 10;
  background-color: #002b36;
}

a {
  height: 45px;
  width: 100%;
  overflow-x: hidden;
}

.sidebar a {
  padding: 10px 0px 5px 24px;
  text-decoration: none;
  font-size: 18px;
  display: block;
  color: #818181;
}

.sidebar a:hover {
  background-color: #00566b;
  color: #d1d1d1;
}

i {
  margin-right: 5px;
}

svg {
  margin-right: 5px;
}

.bk {
  transition: all 0.5s linear;
}

.blur {
  opacity: 0.9;
}
</style>