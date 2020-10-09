/*
 * @Author: cjd
 * @Date: 2020-05-11 22:04:00
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
// 移动端适配
import 'lib-flexible/flexible'
// 阿里图标
import 'assets/css/icon.css'
import $ from 'jquery'
import http from './api/index.js'
import utils from './utils'
import coment from './coment'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(Vant)

Vue.use(VueLazyload, {
  loading: require('./assets/img/delete.png'),//加载中图片，一定要有，不然会一直重复加载占位图
  error: require('./assets/img/logo.png')  //加载失败图片
})

Object.assign(Vue.prototype, {
  $: $,
  $http: http,
  $utils: utils,
  $coment: coment
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
