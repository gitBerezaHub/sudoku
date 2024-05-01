<script setup lang="ts">
import GameField from "@/components/GameField.vue";
import {
  createBasicMatrix,
  matrixTransposing,
  swapColumns, swapRows,
  swapSmallColumns,
  swapSmallRows
} from "@/logic/logic";

let matrix = createBasicMatrix();
let trasposing = matrixTransposing(matrix);
let swappedSmallRows = swapSmallRows(matrix, 0, 8);
let swappedSmallColumns = swapSmallColumns(matrix, 6, 8);
let swappedColumns = swapColumns(matrix, 0, 1);
let swappedRows = swapRows(matrix, 0, 1);
</script>

<template>
  <game-field :matrix="matrix" style="margin-bottom: 50px" />
  <game-field :matrix="swappedRows" />
</template>

<style scoped lang="scss"></style>
