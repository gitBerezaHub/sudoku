<script setup lang="js">
import GameCell from "@/components/GameCell.vue";
import { defineProps } from "vue";

const props = defineProps({
  section: {
    type: Array,
    required: true
  },
  row: {
    type: Object,
  }
});
</script>

<template>
  <div class="wrapper-section">
    <game-cell
      :cell-value="props.section[0]"
      :coords="{ row: props.row, column: 0 }"
    />
    <game-cell
      :cell-value="props.section[1]"
      :coords="{ row: props.row, column: 1 }"
    />
    <game-cell
      :cell-value="props.section[2]"
      :coords="{ row: props.row, column: 2 }"
    />

    <game-cell
      :cell-value="props.section[3]"
      :coords="{ row: props.row, column: 3 }"
    />
    <game-cell
      :cell-value="props.section[4]"
      :coords="{ row: props.row, column: 4 }"
    />
    <game-cell
      :cell-value="props.section[5]"
      :coords="{ row: props.row, column: 5 }"
    />

    <game-cell
      :cell-value="props.section[6]"
      :coords="{ row: props.row, column: 6 }"
    />
    <game-cell
      :cell-value="props.section[7]"
      :coords="{ row: props.row, column: 7 }"
    />
    <game-cell
      :cell-value="props.section[8]"
      :coords="{ row: props.row, column: 8 }"
    />
  </div>
</template>

<style scoped lang="scss">
.wrapper-section {
  display: flex;
  flex-direction: row;
}
</style>
