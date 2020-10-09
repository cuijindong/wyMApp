<template>
  <div class="fd-word" id="fd-word" @scroll="handlerScroll">
    <div class="fd-cz">
      <div v-for="item in lyricArr" :key="item.key" :id="item.key" class="fd-item">
        <div :class="{'fd-active' : nowWord.key == item.key}">{{item.value}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      lyricArr: [],
      currentTime: 0,
      nowWord: {},
      timelisen: null,
      isCanScroll: true
    }
  },
  inject: ['audioInfo'],
  watch: {
    audioInfo: {
      handler(newValue) {
        this.currentTime = newValue.currentTime
      },
      deep: true
    },
    song: {
      handler() {
        this.init()
      },
      deep: true,
      immediate: true
    },
    currentTime(newValue) {
      this.nowWord = this.getNowWord(newValue)
    },
    nowWord: {
      handler() {
        if (this.isCanScroll) {
          this.niceScroll()
        }
      },
      deep: true
    }
  },
  computed: {
    ...mapState('song', {
      song: 'song',
      audio: 'audio'
    })
  },
  methods: {
    handlerScroll() {
      if (!document.getElementById(this.nowWord.key)) {   // 歌曲切换时，
        return
      }
      let cHeight = document.getElementById(this.nowWord.key).offsetTop - document.getElementById('fd-word').scrollTop
      let zHeight = document.getElementById(this.nowWord.key).offsetHeight
      if (Math.abs(cHeight) > zHeight * 3) {
        this.isCanScroll = false
        clearTimeout(this.timelisen)
        this.timelisen = setTimeout(() => {
          this.isCanScroll = true
        }, 1000);
      }
    },
    init() {
      this.lyricArr = this.getLyricArr(this.song.lyric.lyric)
    },
    /**
     * 获取歌词数组
     */
    getLyricArr(lyric) {
      let arr = lyric.split(/[\n]/)
      arr.pop()
      let lyricArr = arr.map(v => {
        let time = v.substring(1, v.indexOf(']'))
        
        let item = {
          key: this.getTime(time),
          value: v.substring(v.indexOf(']') + 1)
        }
        return item
      })
      return lyricArr
    },
    /**
     * 获取时间（秒）
     */
    getTime(timeString) {
      let arr = timeString.split(':')
      return (parseFloat(arr[0]) * 60 + parseFloat(arr[1]) ).toFixed(3)
    },
    /**
     * 返回当前歌词（一行）
     */
    getNowWord(newValue) {
      let nowWord = this.lyricArr.filter((v, i) => {
        if (parseFloat(newValue) >= parseFloat(v.key)) {
          if (i < (this.lyricArr.length - 1)) {
            if (parseFloat(newValue) <= parseFloat(this.lyricArr[i + 1].key)) {
              return v
            }
          } else {
            return v
          }
        }
      })
      return nowWord[0]
    },
    /**
     * 平滑滚动
     */
    niceScroll() {
      let cHeight = document.getElementById(this.nowWord.key).offsetTop - document.getElementById('fd-word').scrollTop    // 应该滚动的高度
      let zHeight = document.getElementById(this.nowWord.key).offsetHeight    // 当前元素的高度
      let flag = 1
      let offsetHeight = cHeight
      if(Math.abs(cHeight) > zHeight) {         // 手动滑动了
        flag = offsetHeight / 100
      }
      let setHeight = 0
      let time = setInterval(() => {
        document.getElementById('fd-word').scrollTop = document.getElementById('fd-word').scrollTop + flag
        setHeight += flag
        if (Math.abs(setHeight) >= Math.abs(offsetHeight)) {
          clearInterval(time)
        }
      }, 5)
    }
  }
}
</script>
<style lang="scss" scoped>
.fd-active{
  color: #dcdee0;
}
.fd-word{
  height: 100%;
  color: #818181;
  position: relative;
  bottom: 0;
  overflow: auto;
  .fd-cz{
    position: absolute;
    width: 100%;
    font-size: 35px;
    top: 0;
    margin-top: 50%;
    margin-bottom: 50%;
    .fd-item{
      padding: 30px;
    }
  }
}
</style>