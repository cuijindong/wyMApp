import type from './mutation-type'

export default {
  [type.SET_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo
  },
  [type.SET_LOGIN_STATE](state, loginState) {
    state.loginState = loginState
  },
  [type.SET_IS_OPEN_PLAY] (state, flag) {
    state.isOpenPlay = flag
  },
  [type.SET_IS_OPEN_SONGSTER](state, flag) {
    state.isOpenSongster = flag
  },
  [type.SET_SONG_LIST_STATE](state, flag) {
    state.songListState = flag
  }
}