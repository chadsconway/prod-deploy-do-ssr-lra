<template>
  <div>
    <basic />
    <hr />
    <headfoot />
    <hr />
    <horizontal />
    <hr />
    <quotecard />
  </div>
</template>

<script>
import card_basic from "@/components/card_basic.vue";
import card_head_foot from "@/components/card_head_foot.vue";

import card_quote from "@/components/card_quote.vue";
export default {
  components: {
    basic: card_basic,
    headfoot: card_head_foot,

    quotecard: card_quote
  }
};
</script>

<style>
</style>