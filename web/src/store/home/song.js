import type from '../mutation-type'

export default {
  namespaced: true,
  state: {
    song: {}
  },
  mutations: {
    [type.SET_SONG] (state, song) {
      state.song = song
    }
  },
  actives: {
    setSong ({commit}, song) {
      commit(type.SET_SONG, song)
    }
  }
}