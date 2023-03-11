import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainPage from "@/views/MainPage.vue";
import AuthPage from "@/views/AuthPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/login',
    component: AuthPage,
  },
  {
    path: '/registration',
    component: AuthPage,
  },
  {
    path: '/registration/confirm',
    component: AuthPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
