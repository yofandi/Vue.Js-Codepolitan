<template>
  <header>
    <h4>Question 1/2</h4>
    <div class="bar">
      <div class="bar-progress"></div>
    </div>
  </header>
</template>

<script setup></script>

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
  width: 50%;
  background-color: #b6f8bd;
}
</style>
