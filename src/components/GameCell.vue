<script setup lang="ts">
import { ref, watch } from "vue";

const num = ref("");

watch(num, () => {
  if (isNaN(Number(num.value))) {
    num.value = "";
  }
});
</script>

<template>
  <input class="cell" v-model="num" />
</template>

<style scoped lang="scss">
.cell {
  all: unset;
  text-align: center;
  border: 1px solid #000;
  width: 40px;
  height: 40px;
  padding: 0;
}
</style>
