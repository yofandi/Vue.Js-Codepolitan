<script setup>
</script>

<template>
  <div class="card">
    <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="quiz.title" />
    <div class="card-body">
      <h2>judull</h2>
      <p>deskripsi</p>
    </div>
  </div>
</template>

<style scoped>
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