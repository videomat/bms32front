import { createRouter, createWebHistory } from 'vue-router'
import AllBridgesView from '../views/AllBridgesView.vue'
import LoginView from "@/views/LoginView.vue";
import HomeView from '../views/HomeView.vue'

const routes = [

  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path: '/login',
    name: 'loginRoute',
    component: LoginView
  },
  {
    path: '/bridges/all',
    name: 'allbridgesRoute',
    component: AllBridgesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
