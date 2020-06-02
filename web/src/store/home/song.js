/*
 * @Author: cjd
 * @Date: 2020-06-02 21:41:39
 */ 
import type from '../mutation-type'

export default {
  namespaced: true,
  state: {
    song: {},
    audio: {}
  },
  mutations: {
    [type.SET_SONG] (state, song) {
      state.song = song
    },
    [type.SET_AUDIO] (state, audio) {
      state.audio = audio
    }
  },
  actives: {
    setSong ({commit}, song) {
      commit(type.SET_SONG, song)
    }
  }
}