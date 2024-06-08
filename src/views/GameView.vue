<script setup lang="ts">
import GameField from "@/components/GameField.vue";
import { Matrix } from "@/logic/Matrix";
import { useStore } from "vuex";
import NumsPanel from "@/components/NumsPanel.vue";
import MistakesCounter from "@/components/MistakesCounter.vue";

const store = useStore();
const createdMatrix = new Matrix();
createdMatrix.shuffleMatrix();
createdMatrix.deleteCell(30);
store.state.matrix = createdMatrix.matrix;
</script>

<template>
  <main>
    <mistakes-counter />
    <game-field class="field" :matrix="store.state.matrix" />
    <nums-panel />
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
