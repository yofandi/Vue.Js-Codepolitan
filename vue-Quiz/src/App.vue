<template>
  <main>
    <header>
      <h1 id="title">Vue Quiz</h1>
      <input type="text" name="" id="search-input" placeholder="search your quiz">
    </header>
    <section id="quiz-container">
      <div class="card">
        <img src="https://www.dewaweb.com/blog/wp-content/uploads/2023/12/dewaweb-blog-header-ketahui-apa-itu-coding-2-copy.webp" alt="">
        <div class="card-body">
          <h2>Programing</h2>
          <p>2 questions</p>
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