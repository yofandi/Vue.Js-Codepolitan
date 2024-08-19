<template>
  <header>
    <h4>Question {{ questionPage }}</h4>
    <div class="bar">
      <div class="bar-progress" :style="{ width: barPercentage }"></div>
    </div>
  </header>
</template>

<script setup>
import { defineProps } from "vue";

const { questionPage, barPercentage } = defineProps([
  "questionPage",
  "barPercentage",
]);
</script>

<style scoped>
header {
  margin-top: 20px;
}

header h4 {
  font-size: 30px;
}

.bar {
  width: 100%;
  height: 50px;
  border: 3px solid #b6f8bd;
}

.bar-progress {
  height: 100%;
  width: 0%;
  background-color: #b6f8bd;
}
</style>
