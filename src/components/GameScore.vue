<script setup lang="ts">
import { onMounted, ref } from "vue";
import store from "@/store";

const complexityList = [
  "Быстрое",
  "Лёгкий",
  "Средний",
  "Сложный",
  "Гигантский",
];
const currentComplexity = ref("");
onMounted(() => {
  currentComplexity.value = complexityList[store.state.complexityLevel];
});
</script>

<template>
  <div class="score-wrapper">
    <p>Счёт: 5000</p>
    <p>{{ currentComplexity }}</p>
  </div>
</template>

<style scoped lang="scss">
.score-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
