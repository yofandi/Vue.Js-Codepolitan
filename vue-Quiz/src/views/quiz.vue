<template>
  <quizHeader></quizHeader>
  <quizContent :question="quiz.questions[currentQuestionIndex]"></quizContent>
</template>

<script setup>
import quizHeader from "@/components/quizHeader.vue";
import quizContent from "@/components/quizContent.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import quizes from "../data/quizes.json";

const route = useRoute();
const QuizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === QuizId);
const currentQuestionIndex = ref(0);
</script>

<style scoped></style>
