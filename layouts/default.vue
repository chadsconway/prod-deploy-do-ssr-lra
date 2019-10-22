<template>
  <div>
    <Header />
    <Sidenav />
    <Main>
      <nuxt />
    </Main>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/header";
import Main from "@/components/main";
import Footer from "@/components/footer";
import Sidenav from "@/components/sidenav";
export default {
  components: {
    Header,
    Main,
    Footer,
    Sidenav
  }
};
</script>
<style>
</style>