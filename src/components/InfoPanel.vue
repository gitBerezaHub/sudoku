<script setup lang="ts">
import MistakesCounter from "@/components/MistakesCounter.vue";
import GameScore from "@/components/GameScore.vue";
import GameTimer from "@/components/GameTimer.vue";
</script>

<template>
  <div class="info-wrapper">
    <mistakes-counter />
    <game-score />
    <game-timer />
  </div>
</template>

<style scoped lang="scss">
.info-wrapper {
  width: 85%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 60px;
}
</style>
