<script setup>
import { ref } from "vue";

const showForm = ref(false);

const newMemo = ref("");
const memos = ref([]);

const errorMessage = ref("");

function getRandomColor() {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
}

function deleteMemo(id) {
  memos.value = memos.value.filter((memo) => memo.id !== id);
}

function addMemo() {
  if (!newMemo.value) {
    errorMessage.value = "please enter your memo";
    return;
  }
  memos.value.push({
    id: Date.now(),
    memo: newMemo.value,
    date: new Date().toLocaleDateString(),
    backgroundColor: getRandomColor(),
  });

  newMemo.value = "";
  showForm.value = false;
}
</script>

<template>
  <main>
    {{ memos }}
    <div class="container">
      <header>
        <h1 class="header-title">Memos</h1>
        <button @click="showForm = true" class="header-button">+</button>
      </header>
      <div class="card-container">
        <div
          v-for="(isian, index) in memos"
          :key="index"
          class="card"
          :style="{ backgroundColor: isian.backgroundColor }"
        >
          <p class="card-content">
            {{ isian.memo }}
          </p>
          <div class="card-footer">
            <p class="card-date">{{ isian.date }}</p>
            <button @click="deleteMemo(isian.id)" class="card-btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showForm" class="form-overlay">
      <div class="form-modal">
        <p class="form-error" v-if="errorMessage">{{ errorMessage }}</p>
        <button @click="showForm = false" class="form-close-btn">x</button>
        <textarea
          v-model="newMemo"
          name=""
          id="memo"
          cols="30"
          rows="10"
          class="memo"
        ></textarea>
        <button @click="addMemo" class="form-save-btn">save</button>
      </div>
    </div>
  </main>
</template>
<style scoped>
main {
  height: 100vh;
  width: 100vw;
}
.container {
  max-width: 900px;
  padding: 10px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 25px;
  color: #6e6e6eee;
}

.header-button {
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 100%;
  background-color: #f82d2dee;
  color: white;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  width: 290px;
  height: 290px;
  padding: 10px;
  background-color: aquamarine;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-content: center;
  
}

.form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.form-modal {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 423px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.form-save-btn {
  width: 100%;
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
  border: none;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  font-size: 20px;
  padding: 10px 20px;
  margin-top: 10px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.form-save-btn:hover {
  background: linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  transform: scale(1.05);
}

.form-save-btn:focus {
  outline: none;
}

.form-close-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  background: #ff4c4c; /* Red background for Close button */
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 25px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.form-close-btn:hover {
  background: #e63939; /* Slightly darker red on hover */
}

.form-error {
  color: red;
}
</style>
