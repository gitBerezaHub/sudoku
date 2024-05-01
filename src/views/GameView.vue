<script setup lang="ts">
import GameField from "@/components/GameField.vue";
import { createBasicMatrix, matrixTransposing, swapRows } from "@/logic/logic";

let matrix = createBasicMatrix();
let trasposing = matrixTransposing(matrix);
let swapped = swapRows(matrix, 0, 8);
console.log(swapped);
</script>

<template>
  <game-field :matrix="matrix" style="margin-bottom: 50px" />
  <game-field :matrix="swapped" />
</template>

<style scoped lang="scss"></style>
