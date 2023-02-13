<script setup>
import { useTodoStore } from "../stores/todo";
import { storeToRefs } from "pinia";

const store = useTodoStore();
const { todos, checkedTodosCount } = storeToRefs(store);
const { removeTodo, toggleStatus } = store;
</script>
<template>
  <div class="container">
    <p v-if="checkedTodosCount.length === 0" class="title">
      Nenhuma tarefa concluída.
    </p>
    <p v-else class="title">
      Você possue {{ checkedTodosCount.length }} tarefas concluída(s).
    </p>
    <div class="todo-container">
      <template v-for="todo in todos" :key="todo.id">
        <div v-if="todo.completed" class="task">
          <p>{{ todo.title }}</p>
          <div class="actions-area">
            <i
              class="bi bi-bookmark-check check"
              @click="toggleStatus(todo.id)"
            ></i>
            <i class="bi bi-trash delete" @click="removeTodo(todo.id)"></i>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin: 20px;
  width: 100%;
  font-size: 14px;
  color: #6c6b6b;
}

.todo-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.task {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 3px 3px #e8e8e8;
}
.task p {
  font-weight: 700;
  text-decoration: line-through;
}

.actions-area {
  display: flex;
  gap: 10px;
}

.actions-area i {
  font-size: 18px;
  cursor: pointer;
}

.check:hover {
  color: #1cb91c;
}

.delete:hover {
  color: #e25a2c;
}

@media (max-width: 768px) {
  .container {
    width: 90%;
    margin: 0 auto;
  }

  .title {
    text-align: center;
  }

  .check:hover,
  .delete:hover {
    color: #000;
  }
}
</style>
