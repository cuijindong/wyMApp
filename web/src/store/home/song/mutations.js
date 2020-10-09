import type from '../../mutation-type'

export default {
  [type.SET_SONG](state, song) {
    state.song = song
  },
  [type.SET_AUDIO](state, audio) {
    state.audio = audio
  },
  [type.SET_SONGSTER](state, songster) {
    state.songster = songster
  },
  [type.SET_SONG_LIST](state, songList) {
    state.songList = songList
  },
  [type.SET_SONG_INDEX](state, songIndex) {
    state.songIndex = songIndex
  },
  [type.SET_PLAY_TYPE](state, playType) {
    state.playType = playType
  },
}