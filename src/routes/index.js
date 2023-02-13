import { createRouter, createWebHistory } from "vue-router";
import TodosView from "../views/TodosView.vue";

const routes = [
  { path: "/", component: TodosView },
  {
    path: "/checked",
    component: () => import("../views/CheckedTodosView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
