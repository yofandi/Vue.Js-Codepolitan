<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <main>
    <div id="app" class="container">
      <div class="counter-box">
        <h1>Counter</h1>
        <div id="counter">{{ count }}</div>
        <div class="buttons">
          <button @click="count++">Increment</button>
          <button @click="count--">Decrement</button>
          <button @click="count = 0">Reset</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  text-align: center;
}

.counter-box {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

h1 {
  margin-bottom: 20px;
  font-size: 2.5em;
  color: #333;
}

#counter {
  font-size: 4em;
  margin-bottom: 20px;
  color: #ff7e5f;
}

.buttons {
  display: flex;
  justify-content: space-around;
}

button {
  padding: 10px 20px;
  font-size: 1.2em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
}

button:hover {
  opacity: 0.9;
}

button:nth-child(1) {
  background: #28a745;
  color: #fff;
}

button:nth-child(2) {
  background: #dc3545;
  color: #fff;
}

button:nth-child(3) {
  background: #ffc107;
  color: #333;
}
</style>
