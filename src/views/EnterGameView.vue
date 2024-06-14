<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";
import store from "@/store";

const openModal = ref(false);
function setComplexity(level: number) {
  store.state.complexityLevel = level;
  router.push("/game");
}
</script>

<template>
  <main
    :style="openModal && { backgroundColor: 'rgba(0, 0, 0, 0.65)' }"
    @click.self="openModal = false"
  >
    <h1>SUDOKU</h1>
    <button class="new-game-btn" @click="openModal = true">Новая игра</button>
  </main>
  <div v-if="openModal" class="mode-modal">
    <button class="mode-button" @click="setComplexity(0)">быстрое</button>
    <button class="mode-button" @click="setComplexity(1)">легкий</button>
    <button class="mode-button" @click="setComplexity(2)">средний</button>
    <button class="mode-button" @click="setComplexity(3)">сложный</button>
    <button class="mode-button" @click="setComplexity(4)">гигантский</button>
  </div>
</template>

<style scoped lang="scss">
main {
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.new-game-btn {
  background-color: #0388c5;
  color: #fff;
  width: 80vw;
  height: 7vh;
  border-radius: 12px;
  border: none;
  font-size: 25px;
}

.mode-modal {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto auto 0;
  background-color: #d4d3d3;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 55vh;
}

.mode-button {
  width: 85%;
  height: 8vh;
  margin: 5px auto;
  background-color: #f1f1f1;
  border: none;
  border-radius: 12px;
  font-size: 30px;
  text-align: left;
  padding: 0 20px;

  &:hover {
    background-color: #e5e4e4;
  }
}
</style>
