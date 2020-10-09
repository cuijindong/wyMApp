<!--
 * @Author: cjd
 * @detaile: 底部
 * @Date: 2020-05-18 21:37:00
--> 
<template>
  <div class="fd-bottom" @click.stop="handleBottom">
      <div class="fd-left">
          <div class="fd-img">
              <img v-lazy="song.base.album.picUrl" alt="">
          </div>
          <div class="fd-text">
              <div class="fd-title-bott">{{song.base.name}}</div>
              <div class="fd-lyric">{{song.base.artists[0].name}}</div>
          </div>
      </div>
      <div class="fd-right">
          <div class="fd-play" id="fd-play">
              <arc-progress ref="arcProgress"></arc-progress>
          </div>
          <div class="fd-more" @click.stop="openSongList">
              <i class="iconfont">&#xe615;</i>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import arcProgress from 'components/arcProgress'
  export default {
    components: {
        arcProgress,      // 播放按钮（带进度条）
    },
    computed: {
        ...mapState('song', {
            song: 'song'
        }),
        ...mapState({
            songListState: 'songListState'
        })
    },
    methods: {
        ...mapMutations({
            setIsOpenPlay: 'SET_IS_OPEN_PLAY',
            setSongListState: 'SET_SONG_LIST_STATE'
        }),
        /**
         * 打开播放列表弹窗
         */
        openSongList() {
            this.setSongListState(true)
        },
        /**
         * 打开歌词弹窗
         */
        handleBottom() {
            this.setIsOpenPlay(true)
        }
    },
  }
</script>

<style lang="scss" scoped>
.fd-bottom{
    width: 100%;
    height: 100px;
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #dcdee0;
    .fd-left{
        display: flex;
        align-items: center;
        .fd-img{
            height: 80px;
            width: 80px;
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                border: 1px solid #818181;
            }
        }
        .fd-text{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
            text-align: left;
            .fd-title-bott{
                font-size: 30px;
                margin-bottom: 5px;
            }
            .fd-lyric{
                font-size: 20px;
                color: #818181;
            }
        }
    }
    .fd-right{
        display: flex;
        align-items: center;
        height: 100%;
        .fd-play{
            width: 80px;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center; 
        }
        .fd-more{
            height: 100%;
            display: flex;
            align-items: center;
            .iconfont{
                margin-left: 30px;
                font-size: 40px;
                color: rgb(124, 124, 124);
            }
        }
    }
}
</style>