<script setup lang="ts">
import { defineProps, onMounted, PropType, ref, watch } from "vue";
import { useStore } from "vuex";
import { Cell } from "@/logic/Matrix";

const store = useStore();

const props = defineProps({
  cellValue: {
    type: Object as PropType<Cell>,
    required: true,
  },
  coords: {
    type: Object,
    required: true,
  },
});
const num = ref(props.cellValue);
let cellID = props.coords.column * 9 + props.coords.row;

function clickCell(cellValue: Cell) {
  if (!cellValue.isHide) {
    store.state.selectedNum = num.value.digit;
  } else {
    if (store.state.selectedNum) {
      if (num.value.digit === store.state.selectedNum) {
        num.value.isHide = false;
        drawFocus(num.value.digit);
      } else {
        const cell = document.getElementsByClassName("cell");
        if (cell) {
          cell[props.coords.row * 9 + props.coords.column].classList.add(
            "incorrect"
          );
          num.value.incorrectDigit = store.state.selectedNum;
          cell[props.coords.row * 9 + props.coords.column].textContent = String(
            num.value.incorrectDigit
          );
          store.commit("incrementMistake");
        }
      }
    }
  }
}

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
      if (
        store.state.matrix[i][j].digit === num &&
        !store.state.matrix[i][j].isHide
      ) {
        if (cell) {
          cell[i * 9 + j].classList.remove("incorrect");
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
    num.value.digit = props.cellValue?.digit;
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
  <div class="cell" id="cell" @click="clickCell(num)">
    {{ !num.isHide ? num.digit : "" }}
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

.incorrect {
  background-color: #f13535;
}
</style>
