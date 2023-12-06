import { createRouter, createWebHistory } from 'vue-router'
import AllBridgesView from '../views/AllBridgesView.vue'
import LoginView from "@/views/LoginView.vue";
import HomeView from "@/views/HomeView.vue";

const routes = [

  {
    path: '/login',
    name: 'loginRoute',
    component: LoginView
  },
  {
    path: '/allbridges',
    name: 'allbridgesRoute',
    component: AllBridgesView

  },
  {
    path: '/home',
    name: 'homeRoute',
    component: HomeView

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
