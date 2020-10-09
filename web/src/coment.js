import $http from './api/index.js'
import mutations from './store/home/song/mutations'
import state from './store/home/song/state'
import { Toast } from 'vant';
export default {
  /**
   * @description: 点击歌曲
   * @param {song} song 歌曲信息
   * @param {songList} songList 歌曲列表
   * @return: 
   */
  handlePlay: function (song, songList) {
    this.changeSong(song).then(() => {
      let songIndex
      songList.forEach((item, i) => {
        if (item.id === song.id) {songIndex = i}
      })
      mutations.SET_SONG_INDEX(state, songIndex)
      mutations.SET_SONG_LIST(state, songList)
    })
  },
  /**
   * @description: 切歌
   * @param {song} song 歌曲信息
   * @param {songIndex} songIndex 当前歌曲在歌曲列表index
   * @return:
   */
  changeSong: async function (song, songIndex) {
    let urlInfo = await $http.songUrl({ id: song.id })
    let lyric = await $http.lyric({ id: song.id })

    let song_c = this.changeData(song)

    let songInfo = {
      base: song_c,
      urlInfo: urlInfo.data,
      lyric: lyric.lrc
    }
    if(songIndex != undefined) {
      mutations.SET_SONG_INDEX(state, songIndex)
    }
    mutations.SET_SONG(state, songInfo)
  },
  /**
   * @description: 改变数据结构(改变图片等)
   * @param {item} item 歌曲信息
   * @return:
   */
  changeData(song) {
    let song_c = JSON.parse(JSON.stringify(song))
    if (!song_c.album) {
      song_c.album = {
        picUrl: song_c.al.picUrl
      }
    }
    if (!song_c.artists) {
      song_c.artists = song_c.ar
    }

    return song_c
  },
/**
 * @description: 将时间改变成 '2:23' 格式
 * @param {String} str 时间字符串
 * @param {Number} type 1:整数，2:小数
 * @return:
 */
  changeNumToTime(str, type) {
    let num
    if (type === 1) {
      num = parseInt(str)
    } else {
      num = parseFloat(str)
    }
    let fen = parseInt(num / 60)
    let miao = num % 60
    if (fen < 10) {
      fen = '0' + fen
    }
    if (miao < 10) {
      miao = '0' + miao
    }
    return `${fen}:${miao}`
  },
  /**
  * @description: 改变播放模式
  * @param {Boolean} type true：有提示窗，false：没有提示窗
  * @return:
  */
  changePlayType(type = false) {
    let playType = 0
    let list = [
      { ico: '&#xe64c;', name: '列表循环' },
      { ico: '&#xe64b;', name: '单曲循环' },
      { ico: '&#xe64d;', name: '随机播放' },
    ]

    if (state.playType === 2) {
      playType = 0
    } else {
      playType = state.playType + 1
    }
    mutations.SET_PLAY_TYPE(state, playType)

    if (type) {
      Toast({
        message: list[state.playType].name,
        position: 'bottom'
      })
    }
  },
  /**
  * @description: 生成随机数
  * @param {Number} minNum 最小数
  * @param {Number} maxNum 最大数
  * @return:
  */
  randomNum(minNum, maxNum) {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
  } 
}