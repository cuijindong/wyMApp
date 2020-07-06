/*
 * @Author: cjd
 * @Date: 2020-05-11 22:04:00
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/search/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
