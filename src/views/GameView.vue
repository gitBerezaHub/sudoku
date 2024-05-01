<script setup lang="ts">
import GameField from "@/components/GameField.vue";
import {
  createBasicMatrix,
  matrixTransposing,
  swapColumns,
  swapRows,
} from "@/logic/logic";

let matrix = createBasicMatrix();
let trasposing = matrixTransposing(matrix);
let swappedRows = swapRows(matrix, 0, 8);
let swappedColumns = swapColumns(matrix, 6, 8);
</script>

<template>
  <game-field :matrix="matrix" style="margin-bottom: 50px" />
  <game-field :matrix="swappedColumns" />
</template>

<style scoped lang="scss"></style>
