<template>
  <div id="app">
    <v-app>
      <MobileAppBar />
      <Header />
      <Sidenav />
      <Main>
        <nuxt />
      </Main>
      <MobileBottomNav />
      <Footer />
    </v-app>
  </div>
</template>
<script>
import Header from "@/components/header";
import Main from "@/components/main";
import Footer from "@/components/footer";
import Sidenav from "@/components/sidenav";
import MobileBottomNav from "@/components/mobile_bottom_nav";
import MobileAppBar from "@/components/mobile_app_bar";
export default {
  components: {
    Header,
    Main,
    Footer,
    Sidenav,
    MobileBottomNav,
    MobileAppBar
  }
};
</script>
<style>
a:hover {
  color: #007977;
}
.w3-theme-l5 {
  color: #000 !important;
  background-color: #ebffff !important;
}
.w3-theme-l4 {
  color: #000 !important;
  background-color: #bcfffe !important;
}
.w3-theme-l3 {
  color: #000 !important;
  background-color: #78fffd !important;
}
.w3-theme-l2 {
  color: #000 !important;
  background-color: #35fffc !important;
}
.w3-theme-l1 {
  color: #000 !important;
  background-color: #00f1ed !important;
}
.w3-theme-d1 {
  color: #fff !important;
  background-color: #009c99 !important;
}
.w3-theme-d2 {
  color: #fff !important;
  background-color: #008b88 !important;
}
.w3-theme-d3 {
  color: #fff !important;
  background-color: #007977 !important;
}
.w3-theme-d4 {
  color: #fff !important;
  background-color: #006866 !important;
}
.w3-theme-d5 {
  color: #fff !important;
  background-color: #005755 !important;
}

.w3-theme-light {
  color: #000 !important;
  background-color: #ebffff !important;
}
.w3-theme-dark {
  color: #fff !important;
  background-color: #005755 !important;
}
.w3-theme-action {
  color: #fff !important;
  background-color: #005755 !important;
}

.w3-theme {
  color: #fff !important;
  background-color: #00aba9 !important;
}
.w3-text-theme {
  color: #00aba9 !important;
}
.w3-border-theme {
  border-color: #00aba9 !important;
}

.w3-hover-theme:hover {
  color: #fff !important;
  background-color: #00aba9 !important;
}
.w3-hover-text-theme:hover {
  color: #00aba9 !important;
}
.w3-hover-border-theme:hover {
  border-color: #00aba9 !important;
}
</style>