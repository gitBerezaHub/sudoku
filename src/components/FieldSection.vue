<script setup lang="ts">
import GameCell from "@/components/GameCell.vue";
</script>

<template>
  <div class="wrapper-section">
    <game-cell />
    <game-cell />
    <game-cell />

    <game-cell />
    <game-cell />
    <game-cell />

    <game-cell />
    <game-cell />
    <game-cell />
  </div>
</template>

<style scoped lang="scss">
.wrapper-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: 1px solid #000;
}
</style>
