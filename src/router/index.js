import { createRouter, createWebHistory } from 'vue-router'
import MultipleView from '../views/MultipleView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: MultipleView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
