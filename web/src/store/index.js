import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

import home from './home/index'

Vue.use(Vuex)

const modules = {...home}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules
})
