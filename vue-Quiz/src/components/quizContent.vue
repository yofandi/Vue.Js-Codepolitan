<template>
  <section id="question-container">
    <h1 class="question-title">{{ question.text }}</h1>
  </section>
  <section id="options-container">
    <div class="option" v-for="option in question.answers" :key="option.id">
      <p class="option-label">{{ option.label }}</p>
      <p class="option-value">{{ option.text }}</p>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from "vue";

const { question } = defineProps(["question"]);
</script>

<style scoped>
.question-container {
  margin-top: 30px;
}

.question-title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
}

.option-container {
}

.option {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.option-label {
  font-size: 20px;
  font-weight: bold;
  width: 50px;
  height: 50px;
  background-color: #b7fcf9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.option-value {
  font-size: 20px;
  font-weight: bold;
  padding: 0 20px;
  background-color: #d7d2d2;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
</style>
