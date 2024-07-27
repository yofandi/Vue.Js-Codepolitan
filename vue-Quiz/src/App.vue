<template>
  <main>
    <header>
      <h1 id="title">Vue Quiz</h1>
      <input type="text" name="" id="search-input">
    </header>
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
</style>