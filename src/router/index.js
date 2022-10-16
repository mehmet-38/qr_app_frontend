import { createRouter, createWebHistory } from "vue-router";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import Menu from "@/views/Menu.vue";
const routes = [
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/menu/:menus_id/rest_id/:rest_id",
    name: "menu",
    component: Menu,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
