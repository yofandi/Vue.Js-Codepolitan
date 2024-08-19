<template>
  <section class="result">
    <p>Score:</p>
    <h1>{{ numberOfCorrectAnswer }} / {{ quizQuestionslength }}</h1>
    <RouterLink to="/">Go Back</RouterLink>
  </section>
</template>

<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

const { quizQuestionslength, numberOfCorrectAnswer } = defineProps([
  "quizQuestionslength",
  "numberOfCorrectAnswer",
]);
</script>

<style scoped>
.result {
  text-align: center;
  padding: 100px 0;
}
p {
  font-size: 25px;
}

h1 {
  font-size: 80px;
}
</style>
