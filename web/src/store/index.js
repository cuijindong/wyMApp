import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

import home from './home/index'

Vue.use(Vuex)

const state = {
  userInfo: {name: 111},  // 用户信息
  isOpenPlay: false       // 是否打开播放弹窗
}

const modules = {...home}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules
})
