<script setup lang="ts">
import { watch } from "vue";
import store from "../store";

watch(
  () => store.state.mistakesQuantity,
  () => {
    if (store.state.mistakesQuantity >= 3) {
      console.log("Проиграл жоско");
    }
  }
);
</script>

<template>
  <p>Ошибки: {{ store.state.mistakesQuantity }}/3</p>
</template>

<style scoped lang="scss"></style>
