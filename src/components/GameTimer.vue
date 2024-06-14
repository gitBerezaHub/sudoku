<script setup lang="ts">
import { onMounted, ref } from "vue";
let firstTime = 0;
const seconds = ref(0);
function testTimer() {
  let time = new Date().getTime();
  if (!firstTime) {
    firstTime = time;
  }
  seconds.value = Math.floor((time - firstTime) / 1000);
  setTimeout(testTimer, 1000);
}

function timeDisplay(num: number) {
  if (num < 10) {
    return "0" + num;
  }
  return num;
}

onMounted(() => {
  testTimer();
});
</script>

<template>
  <div class="wrapper">
    <p>
      {{ timeDisplay(Math.floor(seconds / 60)) }}:{{
        timeDisplay(seconds - 60 * Math.floor(seconds / 60))
      }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  padding-bottom: 0;
}
</style>
