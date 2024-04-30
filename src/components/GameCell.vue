<script setup lang="ts">
import { ref, watch } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  cellValue: {
    type: Number,
    required: true,
  },
});
const num = ref(props.cellValue);

watch(
  () => props,
  () => {
    num.value = props.cellValue;
  }
);
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
