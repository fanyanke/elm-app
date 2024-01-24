import { createRouter, createWebHistory } from 'vue-router'
import { useGlobalStore } from '@/stores/global'

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
    },
    {
      name: 'home',
      path: '/home',
      component: () => import('@/views/Home.vue')
    },
    {
      name: 'searchFood',
      path: '/search',
      component: () => import('@/views/SearchFood.vue')
    },
    {
      name: 'foodCate',
      path: '/food',
      component: () => import('@/views/Food.vue')
    },
    {
      name: 'order',
      path: '/order',
      component: () => import('@/views/Order.vue')
    },
    {
      name: 'user',
      path: '/user',
      component: () => import('@/views/User.vue')
    },
    {
      name: 'shop',
      path: '/shop',
      component: () => import('@/views/Shop.vue')
    }
  ]
})

router.beforeEach((to) => {
  const globalStore = useGlobalStore()

  const navRoute = ['/home', '/search', '/order', '/user']

  if (navRoute.indexOf(to.path) !== -1) {
    // 代表当前路由需要展示底部导航
    globalStore.footerFlag = true
    return console.log('当前跳转路由：', to.path)
  }
  globalStore.footerFlag = false
})

export default router
