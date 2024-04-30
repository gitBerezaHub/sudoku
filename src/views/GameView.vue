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

let matrix = createBasicMatrix();
</script>

<template>
  <game-field :matrix="matrix" />
</template>

<style scoped lang="scss"></style>
