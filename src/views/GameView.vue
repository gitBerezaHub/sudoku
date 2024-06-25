<script setup lang="ts">
import GameField from "@/components/GameField.vue";
import { Matrix } from "@/logic/Matrix";
import { useStore } from "vuex";
import NumsPanel from "@/components/NumsPanel.vue";
import GameHeader from "@/components/GameHeader.vue";
import InfoPanel from "@/components/InfoPanel.vue";
import { watch } from "vue";
import router from "@/router";

const store = useStore();
const createdMatrix = new Matrix();
createdMatrix.shuffleMatrix();
createdMatrix.deleteCell(1);
store.state.matrix = createdMatrix.matrix;

function gameEnded() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (store.state.matrix[i][j].isHide) {
        return 0;
      }
    }
  }
  router.push("win");
}

watch(
  () => store.state.matrix,
  () => {
    gameEnded();
  },
  { deep: true }
);
</script>

<template>
  <header>
    <game-header />
  </header>
  <main>
    <info-panel />
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
</style>
