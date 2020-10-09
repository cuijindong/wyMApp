/*
 * @Author: cjd
 * @Date: 2020-05-11 22:04:00
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import state from '../store/state'
import mutations from '../store/mutations'
import api from '../api/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue'),
    redirect: '/home',
    children: [
      { // 首页
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home.vue'),
      },
      { // 搜索
        path: 'search',
        name: 'Search',
        component: () => import('@/views/search/index.vue')
      },
      // {
      //   path: 'songster',
      //   name: 'Songster',
      //   component: () => import('@/views/songsterPage/index.vue')
      // }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // 初始化用户信息
  if (!state.loginState) {
    console.log(1)
    if (window.localStorage.getItem('accessToken')) {
      mutations.SET_LOGIN_STATE(state,true)
      console.log(state.loginState,1)
    }
    api.status().then()
  }
  // 检测用户是否登录
  if (!state.loginState && to.path != '/login') {
    console.log(state.loginState)
    next('/login')
  } else {
    next()
  }
})

export default router
