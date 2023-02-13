<script setup>
import { RouterView } from "vue-router";
import TodoHeader from "./components/TodoHeader.vue";
import TodoNavbar from "./components/TodoNavbar.vue";
</script>

<template>
  <div class="container">
    <TodoHeader />
    <TodoNavbar />
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
