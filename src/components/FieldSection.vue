<script setup lang="js">
import GameCell from "@/components/GameCell.vue";
import { defineProps } from "vue";

const props = defineProps({
  section: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div class="wrapper-section">
    <game-cell :cell-value="props.section[0]" />
    <game-cell :cell-value="props.section[1]" />
    <game-cell :cell-value="props.section[2]" />

    <game-cell :cell-value="props.section[3]" />
    <game-cell :cell-value="props.section[4]" />
    <game-cell :cell-value="props.section[5]" />

    <game-cell :cell-value="props.section[6]" />
    <game-cell :cell-value="props.section[7]" />
    <game-cell :cell-value="props.section[8]" />
  </div>
</template>

<style scoped lang="scss">
.wrapper-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: 1px solid #000;
}
</style>
