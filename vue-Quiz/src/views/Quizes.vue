<script setup>
import { ref, watch } from "vue";
import srcQuiz from "../data/quizes.json";

import QuizCardVue from "../components/QuizCard.vue"

const quizes = ref(srcQuiz);
const search = ref("");

watch(search, function () {
  quizes.value = srcQuiz.filter((quiz) => {
    return quiz.title.toLowerCase().includes(search.value.toLowerCase());
  });
});
</script>

<template>
    <header>
      <h1 id="title">Vue Quiz</h1>
      <input
        type="text"
        name=""
        id="search-input"
        placeholder="search your quiz"
        v-model.trim="search"
      />
    </header>
    <section id="quiz-container">
      <QuizCardVue v-for="(quiz) in quizes" :key="quiz.id" v-bind:quiz="quiz" />
    </section>
</template>

<style scoped>

header {
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

#title {
  font-weight: bold;
  margin-right: 30px;
}

#search-input {
  border: none;
  background-color: #b6b6b6bf;
  padding: 10px;
  border-radius: 5px;
}

#quiz-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
</style>
