<script setup lang="ts">
import GameField from "@/components/GameField.vue";
import { Matrix } from "@/logic/Matrix";

const matrix = new Matrix();
matrix.shuffleMatrix();
</script>

<template>
  <main>
    <game-field class="field" :matrix="matrix.matrix" />
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.field {
  margin-top: 10vh;
}
</style>
