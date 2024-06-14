<script setup lang="ts"></script>

<template>
  <div class="header-wrapper">
    <div class="left-part">
      <img src="@/assets/back-arrow.svg" alt="" height="30" />
      <p class="level-name">Серия 21</p>
    </div>
    <div class="right-part">
      <img src="@/assets/pause.svg" alt="" height="30" />
      <img src="@/assets/customisation.svg" alt="" height="30" />
      <img src="@/assets/settings.svg" alt="" height="30" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-wrapper {
  padding-top: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.left-part,
.right-part {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.level-name {
  font-size: 22px;
  margin: 0;
}
</style>
