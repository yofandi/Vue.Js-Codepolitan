<template>
  <quizHeader :questionPage="questionPage"></quizHeader>
  <quizContent :question="quiz.questions[currentQuestionIndex]"></quizContent>
  <button
    @click="currentQuestionIndex++"
    :disabled="currentQuestionIndex === quiz.questions.length - 1"
  >
    >>> Next
  </button>
</template>

<script setup>
import quizHeader from "@/components/quizHeader.vue";
import quizContent from "@/components/quizContent.vue";
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import quizes from "../data/quizes.json";

const route = useRoute();
const QuizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === QuizId);

const currentQuestionIndex = ref(0);
const questionPage = computed(() => {
  return `${currentQuestionIndex.value + 1} / ${quiz.questions.length}`;
});

// const questionPage = ref(
//   `${currentQuestionIndex.value + 1} / ${quiz.questions.length}`
// );

// watch(
//   () => currentQuestionIndex.value,
//   () => {
//     questionPage.value = `${currentQuestionIndex.value + 1} / ${
//       quiz.questions.length
//     }`;
//   }
// );
</script>

<style scoped></style>
