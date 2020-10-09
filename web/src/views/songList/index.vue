<!--
 * @Author: cjd
 * @detaile: 歌词弹窗
 * @Date: 2020-06-02 21:41:39
-->
<template>
  <div class="fd-song-list" @click.stop="close">
    <div class="fd-main">
      <div class="fd-top">
        <div class="fd-title">
          <span>当前播放</span>
          <span class="fd-num">({{songList.length}})</span>
        </div>
        <div @click.stop="$coment.changePlayType(false)">
          <i></i>
          <span>{{playTypeNames[playType]}}</span>
        </div>
      </div>
      <div class="fd-list">
        <div v-for="(item, i) in songList" :key="i" @click.stop="$coment.changeSong(item, i)">
          <div class="fd-item" :class="{'fd-active': item.id === song.base.id}">
            <div class="fd-left">
              <div class="fd-name">{{item.name}}</div>
              <div class="fd-artists"> - {{item.artists ? item.artists[0].name : item.ar[0].name}}</div>
            </div>
            <div class="fd-right">
              <i>x</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      playTypeNames: ['列表播放', '单曲播放', '随机播放']
    }
  },
  computed: {
    ...mapState('song', {
      song: 'song',
      songList: 'songList',
      playType: 'playType'
    }),
    ...mapState({
      songListState: 'songListState'
    })
  },
  methods: {
    ...mapMutations({
      setSongListState: 'SET_SONG_LIST_STATE'
    }),
    /**
     * 关闭弹窗
     */
    close() {
      this.setSongListState(false)
    }
  }
}
</script>
<style lang="scss" scoped>
.fd-active{
  .fd-artists{
    color: red !important;
  }
  .fd-name{
    color: red !important;
  }
}
.fd-song-list{
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: rgba(0,0,0,.4);
  position: absolute;
  top: 0;
  z-index: 1001;
}
.fd-main{
  font-size: 30px;
  background: #ffffff;
  height: 55%;
  width: calc(100% - 80px);
  margin: 40px;
  position: absolute;
  bottom: 0;
  border-radius: 5%;
  padding: 20px 30px 0 30px;
}
.fd-top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin-bottom: 20px;
}
.fd-title{
  .fd-num{
    font-size: 28px;
    color: #242424;
  }
}
.fd-list{
  height: calc(100% - 100px);
  overflow: auto;
  .fd-item{
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .fd-left{
      display: flex;
      align-items: center;
      .fd-name{
        color: black;
      }
      .fd-artists{
        color: #818181;
        font-size: 20px;
      }
    }
  }
}
</style>