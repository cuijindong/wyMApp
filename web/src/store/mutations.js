import type from './mutation-type'

export default {
  [type.SET_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo
  },
  [type.SET_IS_OPEN_PLAY] (state, flag) {
    state.isOpenPlay = flag
  }
}