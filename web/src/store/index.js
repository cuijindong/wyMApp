import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  userInfo: {name: 111}  // 用户信息
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
  }
})
