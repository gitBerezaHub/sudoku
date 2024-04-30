<script setup lang="ts">
import GameField from "@/components/GameField.vue";

function createBasicMatrix() {
  let matrix = [];
  for (let i = 0; i < 9; i++) {
    matrix[i] = Array(0);
    for (let j = 0; j < 9; j++) {
      matrix[i][j] = Math.floor(((i * 3 + i / 3 + j) % 9) + 1);
    }
  }
  return matrix;
}

function matrixTransposing(matrix: number[][]) {
  let transposed = [];
  for (let i = 0; i < 9; i++) {
    transposed[i] = Array(0);
    for (let j = 0; j < 9; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }
  return transposed;
}

let matrix = createBasicMatrix();
// let transposed = matrixTransposing(matrix);
</script>

<template>
  <game-field :matrix="matrix" />
</template>

<style scoped lang="scss"></style>
