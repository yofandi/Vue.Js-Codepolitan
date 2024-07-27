<script setup>
import { ref } from "vue";
import srcQuiz from "./data/quizes.json";

const quizes = ref(srcQuiz);
console.log(quizes)
</script>

<template>
  <main>
    <header>
      <h1 id="title">Vue Quiz</h1>
      <input type="text" name="" id="search-input" placeholder="search your quiz">
    </header>
    <section id="quiz-container">
      <div class="card" v-for="(quiz, index) in quizes" :key="quiz.id">
        <img :src="quiz.img" :alt="quiz.title">
        <div class="card-body">
          <h2>{{ quiz.title }}</h2>
          <p>{{ quiz.questions.length }} questions</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main{
  max-width: 900px;
  margin: 0 auto;
}

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

#search-input{
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

.card {
	width: 270px;
	overflow: hidden;
	border-radius: 2%;
	box-shadow: 1px 1px 10px #00000033;
	margin-bottom: 35px;
	margin-right: 20px;
	cursor: pointer;
}

.card img {
	width: 100%;
	height: 200px;
	object-fit: cover;
	margin: 0;
}

.card .card-body {
  padding: 0 15px;

}

.card h2 {
  font-weight: bold;
}


</style>