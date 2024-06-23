<script setup lang="ts">
import store from "@/store";
</script>

<template>
  <div class="header-wrapper">
    <div class="left-part">
      <img
        src="@/assets/back-arrow.svg"
        alt=""
        height="30"
        @click="$router.back()"
      />
      <p class="level-name">Серия 21</p>
    </div>
    <div class="right-part">
      <img
        src="@/assets/pause.svg"
        alt=""
        height="30"
        @click="store.state.isGamePaused = true"
      />
      <img src="@/assets/customisation.svg" alt="" height="30" />
      <img src="@/assets/settings.svg" alt="" height="30" />
    </div>
  </div>

  <div class="paused-modal" v-if="store.state.isGamePaused">
    <div class="modal-content">
      <p class="paused-text">Пауза</p>
      <div class="info-box">
        <div class="time-box">
          <p class="box-text">Время</p>
          <p class="box-value">10:44</p>
        </div>
        <div class="complexity-box">
          <p class="box-text">Сложность</p>
          <p class="box-value">Сложный</p>
        </div>
      </div>
      <div class="action-buttons">
        <button class="primary-btn" @click="store.state.isGamePaused = false">
          Продолжить игру
        </button>
        <button class="secondary-btn">Запустить снова</button>
      </div>
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

.paused-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: rgb(0, 0, 0, 0.4);
  z-index: 1;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
}

.modal-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  width: 80vw;
  height: 50vh;
  border-radius: 20px;
  top: 15%;
  left: 10%;
}

.paused-text {
  font-size: 26px;
  margin-bottom: 0;
}

.info-box {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.time-box,
.complexity-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box-text {
  color: #888;
}

.box-value {
  margin-top: 0;
  font-size: 25px;
}

.action-buttons {
  display: flex;
  flex-direction: column;
}

.primary-btn,
.secondary-btn {
  width: 60vw;
  height: 45px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
}

.primary-btn {
  background-color: #0388c5;
  color: #fff;
  margin-bottom: 20px;
}
</style>
