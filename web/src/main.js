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

Vue.config.productionTip = false

Vue.use(Vant)

Object.assign(Vue.prototype, {
  $: $,
  $http: http
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
