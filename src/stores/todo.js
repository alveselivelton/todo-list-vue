import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useTodoStore = defineStore(
  "todo",
  () => {
    const todos = ref([]);

    const uncheckedTodosCount = computed(() => {
      return todos.value.filter((todo) => !todo.completed);
    });

    const checkedTodosCount = computed(() => {
      return todos.value.filter((todo) => todo.completed);
    });

    const addTodo = (todo) => {
      todos.value.unshift(todo);
    };

    const removeTodo = (id) => {
      todos.value = todos.value.filter((todo) => todo.id !== id);
    };

    const toggleStatus = (id) => {
      const todo = todos.value.find((todo) => todo.id === id);
      todo.completed = !todo.completed;
    };

    return {
      todos,
      uncheckedTodosCount,
      checkedTodosCount,
      addTodo,
      removeTodo,
      toggleStatus,
    };
  },
  {
    persist: true,
  }
);
