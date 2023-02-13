<script setup>
import { ref } from "vue";
import { useTodoStore } from "../stores/todo";
import { useRouter } from "vue-router";

const store = useTodoStore();
const { addTodo } = store;

const title = ref("");

const router = useRouter();

const handleSubmit = () => {
  if (!title.value) return;

  addTodo({
    id: Math.ceil(Math.random() * 10000),
    title: title.value,
    completed: false,
  });

  title.value = "";

  router.push("/");
};
</script>

<template>
  <header class="container">
    <div class="title-container">
      <img src="../assets/clipboard_notes.svg" alt="Caderno de anotações" />
      <h1>Todo List</h1>
    </div>
    <form @submit.prevent="handleSubmit" class="form-container">
      <input type="text" placeholder="O que você vai fazer?" v-model="title" />
      <button type="submit">Adicionar</button>
    </form>
  </header>
</template>

<style scoped>
.container {
  width: 100%;
  background-color: #e9e7e7;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.title-container {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.title-container h1 {
  color: #6c6b6b;
  font-weight: 700;
}

.title-container img {
  height: 60px;
}

.form-container {
  margin-bottom: 25px;
  display: flex;
  gap: 5px;
}

.form-container input,
.form-container button {
  padding: 12px 8px;
  border: none;
  border-radius: 7px;
  outline: none;
}
.form-container input {
  width: 300px;
}

.form-container input::placeholder {
  color: #939191;
  font-size: 14px;
  font-weight: 500;
}

.form-container button {
  width: 90px;
  background-color: #ffd000;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
}

.form-container button:hover {
  background-color: #f3cc1c;
}

@media (max-width: 768px) {
  .form-container {
    width: 90%;
    justify-content: center;
  }

  .form-container button:hover {
    background-color: #ffd000;
  }
}
</style>
