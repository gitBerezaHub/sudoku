<script setup lang="ts">
import GameField from "@/components/GameField.vue";
import { matchedRouteKey } from "vue-router";
import { ref } from "vue";
const matrix = ref(Array(9).fill(Array(9).fill(0)));

function createMatrix() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      matrix.value[i][j] = Math.round(Math.random() * 9);
      console.log(i, j, matrix.value[i][j]);
    }
  }
  console.log(matrix.value);
}

createMatrix();
</script>

<template>
  <game-field :matrix="matrix" />
</template>

<style scoped lang="scss"></style>
