import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/citys'
    },
    {
      name: 'citysPage',
      path: '/citys',
      component: () => import('@/views/Citys.vue')
    },
    {
      name: 'loginPage',
      path: '/login',
      component: () => import('@/views/Login.vue')
    },
    {
      name: 'searchAddressPage',
      path: '/cities',
      component: () => import('@/views/SearchAddress.vue')
    }
  ]
})

export default router
