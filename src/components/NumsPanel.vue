<script setup lang="ts">
import store from "@/store";
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
      v-for="index in 9"
      :key="index"
      @click="store.commit('makeSelected', index)"
    >
      {{ index }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  padding: 0 4px;
  margin-top: 20px;
  border: 2px solid #888;
  border-radius: 8px;
}
.num {
  width: 35px;
  height: 45px;
  border: 2px solid #000;
  border-radius: 10px;
  margin: 30px 4px;
  background-color: #fff;
  font-size: 20px;
}
</style>
