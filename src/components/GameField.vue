<script setup lang="js">
import GameRow from "@/components/GameRow.vue";
import { defineProps } from "vue";
const props = defineProps({
  matrix: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="wrapper-field">
    <game-row :section="props.matrix[0]" />
    <game-row :section="props.matrix[1]" />
    <game-row :section="props.matrix[2]" />

    <game-row :section="props.matrix[3]" />
    <game-row :section="props.matrix[4]" />
    <game-row :section="props.matrix[5]" />

    <game-row :section="props.matrix[6]" />
    <game-row :section="props.matrix[7]" />
    <game-row :section="props.matrix[8]" />
  </div>
</template>

<style scoped lang="scss"></style>
