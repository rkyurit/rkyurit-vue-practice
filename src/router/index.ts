import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'page1',
      component: () => import('../views/Page1View.vue')
    },
    {
      path: '/page2',
      name: 'page2',
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Page2View.vue')
    }
  ]
})

export default router
