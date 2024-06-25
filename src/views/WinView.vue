<script setup lang="ts"></script>

<template>
  <div class="background">
    <div class="main-content">
      <p>Ура! Ты выиграл!!</p>
      <div class="statistic">
        <div class="time">
          <p>Время</p>
          <p>1:06</p>
        </div>

        <div class="complexity">
          <p>Сложность</p>
          <p>Простой</p>
        </div>
      </div>
    </div>

    <div class="bottom-panel">
      <button class="primary-btn">Новая игра</button>
      <div class="secondary-action">
        <div class="home">
          <img src="@/assets/home.svg" alt="" width="20" />
          <p>ГЛАВНАЯ</p>
        </div>
        <div class="share">
          <img src="@/assets/share.svg" alt="" width="20" />
          <p>ПОДЕЛИТЬСЯ</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.background {
  width: 100vw;
  height: 100vh;
  background-color: #e5e5f7;
  opacity: 0.6;
  background-image: repeating-radial-gradient(
      circle at 0 0,
      transparent 0,
      #0000ff 30px
    ),
    repeating-linear-gradient(#007bff55, #007bff);
}

.main-content {
  position: fixed;
  top: 20%;
  left: 10%;
  background-color: #fff;
  width: 80vw;
  height: 40vh;
  border-radius: 20px;
  box-shadow: 10px 15px 5px #000;
}

.bottom-panel {
  position: relative;
  top: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.secondary-action {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 65%;
}

.primary-btn {
  width: 65%;
  height: 40px;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 23px;
}

.home,
.share {
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #fff;
}
.share {
  width: 50%;
}
</style>
