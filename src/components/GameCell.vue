<script setup lang="ts">
import { defineProps, onMounted, ref, watch } from "vue";

const props = defineProps({
  cellValue: {
    type: Number,
    required: true,
  },
  coords: {
    type: Object,
    required: true,
  },
});
const num = ref(props.cellValue);
function drawBorders(cell: Element[] | any) {
  // attribute has HTMLCollectionOf<Element> type. TypeScript error
  let cellID = props.coords.column * 9 + props.coords.row;
  let fatLineWidth = "2";
  let thinLineWidth = "1";
  let isTopBordered =
    props.coords.column % 3 == 0 ? fatLineWidth : thinLineWidth;
  let isRightBordered =
    props.coords.row % 3 == 2 ? fatLineWidth : thinLineWidth;
  let isBottomBordered =
    props.coords.column % 3 == 2 ? fatLineWidth : thinLineWidth;
  let isLeftBordered = props.coords.row % 3 == 0 ? fatLineWidth : thinLineWidth;
  cell[cellID].setAttribute(
    "style",
    `border-width: ${isTopBordered}px ${isRightBordered}px ${isBottomBordered}px ${isLeftBordered}px`
  );
}
onMounted(() => {
  const cell = document.getElementsByClassName("cell");
  if (cell) {
    drawBorders(cell);
  }
});
watch(
  () => props,
  () => {
    num.value = props.cellValue;
  }
);
</script>

<template>
  <input class="cell" v-model="num" id="cell" />
</template>

<style scoped lang="scss">
$cellSide: clamp(36px, 9vw, 80px);
.cell {
  all: unset;
  text-align: center;
  border: 1px solid #000;
  width: $cellSide;
  height: $cellSide;
}
</style>
