<script setup lang="ts">
import { defineProps, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();

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
let cellID = props.coords.column * 9 + props.coords.row;

function drawBorders(cell: Element[] | any) {
  // attribute has HTMLCollectionOf<Element> type. TypeScript error
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

function drawFocus(num: number) {
  const cell = document.getElementsByClassName("cell");
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (store.state.matrix[i][j] === num) {
        if (cell) {
          cell[i * 9 + j].classList.add("focused");
        }
      } else {
        cell[i * 9 + j].classList.remove("focused");
      }
    }
  }
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

watch(
  () => store.state.selectedNum,
  () => {
    drawFocus(store.state.selectedNum);
  }
);
</script>

<template>
  <div class="cell" id="cell" @click="store.state.selectedNum = num">
    {{ num }}
  </div>
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

.focused {
  background-color: #96e6f7;
}
</style>
