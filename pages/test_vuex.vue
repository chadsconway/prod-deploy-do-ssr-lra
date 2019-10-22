<template>
  <div id="vuex">
    {{ $store.state.msg }}
    <hr />
    {{ $store.state.module_1.msg }}
  </div>
</template>

<script>
export default {
  middleware: "mw_vuex"
};
</script>

<style>
</style>