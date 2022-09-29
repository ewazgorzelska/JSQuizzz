<script setup>
import Button from "primevue/button";
</script>

<template>
  <div class="p-card container">
    <h1>Welcome</h1>
    <p>I wish you great fun at upgrading your JavaScript skills :)</p>
    <Button label="Start game" class="p-button-lg p-button-rounded" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 50vw;
  height: 50vh;
  margin: 5vh auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10vh;
  padding: 25px;
}
</style>
