<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <nav class="container">
    <ul class="navbar-buttons">
      <li><RouterLink to="/">Tarefas</RouterLink></li>
      <li><RouterLink to="checked">Concluídas</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped>
.container {
  width: 650px;
}

.navbar-buttons {
  list-style: none;
  margin: 12px 0;
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 10px;
}

.navbar-buttons li a {
  display: block;
  width: 100px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  color: #000;
  padding: 4px 0;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.navbar-buttons li a:hover {
  background-color: #f6f5f5;
}

@media (max-width: 768px) {
  .container {
    width: 90%;
    margin: 0 auto;
  }

  .navbar-buttons {
    justify-content: center;
  }

  .navbar-buttons li a:hover {
    background-color: #fff;
  }
}
</style>
