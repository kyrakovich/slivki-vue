import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
// Composables
import MainPage from '@/components/pages/MainPage.vue'
import MenuPage from '@/components/pages/MenuPage.vue'
import AboutUsPage from '@/components/pages/AboutUsPage.vue'
const routes: Array<RouteRecordRaw> = [
  {
    name: 'Main',
    path: '/',
    component: MainPage,
  },
  {
    name: 'Menu',
    path: '/menu',
    component: MenuPage,
  },
  {
    name: 'AboutUs',
    path: '/AboutUs',
    component: AboutUsPage,
  }


]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})



router.isReady().then(() => {
  // Безопасное удаление из localStorage
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem('vuetify:dynamic-reload')
  }
})
export default router