<script setup lang="ts">
import store from "@/store";
import { Cell } from "../logic/Matrix";
import { onMounted, ref, watch } from "vue";
const numsLeft = ref(Array(9).fill(9));
onMounted(() => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      numsLeft.value[i] -= store.state.matrix[j].filter(
        (x: Cell) => x.digit == i + 1 && !x.isHide
      ).length;
    }
  }
});
watch(
  () => store.state.matrix,
  () => {
    numsLeft.value = Array(9).fill(9);
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        numsLeft.value[i] -= store.state.matrix[j].filter(
          (x: Cell) => x.digit == i + 1 && !x.isHide
        ).length;
      }
    }
  },
  { deep: true }
);
</script>

<template>
  <div class="wrapper">
    <button
      :style="
        index === store.state.selectedNum
          ? 'background: #96e6f7'
          : 'background: #fff'
      "
      class="num"
      :disabled="numsLeft[index - 1] == 0"
      v-for="index in 9"
      :key="index"
      @click="store.commit('makeSelected', index)"
    >
      {{ index }} <br />
      <p class="numsLeft">{{ numsLeft[index - 1] }}</p>
    </button>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  padding: 0 4px;
  margin-top: 20px;
  border: 2px solid #888;
  border-radius: 16px;
}
.num {
  width: 35px;
  height: 60px;
  border: 2px solid #000;
  border-radius: 10px;
  margin: 30px 4px;
  background-color: #fff;
  font-size: 25px;

  &:disabled {
    border: 2px solid #888;
  }
}

.numsLeft {
  margin-top: 0;
  font-size: 16px;
  color: #636262;
}
</style>
