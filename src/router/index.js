import {createRouter, createWebHistory} from 'vue-router'
import AllBridgesView from '../views/AllBridgesView.vue'
import LoginView from "@/views/LoginView.vue"
import NewUserView from "@/views/NewUserView.vue"
import HomeView from '../views/HomeView.vue'
import ErrorView from "@/views/ErrorView.vue"
import BridgeDetails from "@/views/BridgeDetailsView.vue";

const routes =
    [
        {
            path: '/home',
            name: 'home',
            component: HomeView
        },
        {
            path: '/',
            name: 'loginRoute',
            component: LoginView
        },
        {
            path: '/allbridges',
            name: 'allbridgesRoute',
            component: AllBridgesView
        },
        {
            path: '/adduser',
            name: 'newUserRoute',
            component: NewUserView
        },
        {
            path: '/error',
            name: 'errorRoute',
            component: ErrorView
        },
        {
            path: '/details',
            name: 'bridgeDetailsRoute',
            component: BridgeDetails
        }
    ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
