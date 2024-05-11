<script setup lang="ts">
import GameField from "@/components/GameField.vue";
import { Matrix } from "@/logic/Matrix";

const matrix = new Matrix();
matrix.shuffleMatrix();
matrix.deleteCell(30);
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
  width: 378px;
  height: 378px;
}
</style>
