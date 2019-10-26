<template>
  <div class="w3-content">
    <div class="w3-container">
      <div class="w3-panel">
        <basic class="mx-auto" />
      </div>
      <div class="w3-panel">
        <headfoot />
      </div>
      <div class="w3-panel">
        <quotecard />
      </div>
      <div class="w3-panel">
        <horizontal />
      </div>
      <div class="w3-panel">
        <cgrid />
      </div>
    </div>
  </div>
</template>

<script>
import card_basic from "@/components/card_basic.vue";
import card_head_foot from "@/components/card_head_foot.vue";
import card_grid from "@/components/card_grid.vue";
import card_horizontal from "@/components/card_horizontal";
import card_quote from "@/components/card_quote.vue";
export default {
  components: {
    basic: card_basic,
    headfoot: card_head_foot,
    horizontal: card_horizontal,
    cgrid: card_grid,
    quotecard: card_quote
  }
};
</script>

<style>
</style>