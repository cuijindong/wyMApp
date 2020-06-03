<template>
  <div class="fd-bottom" @click.stop="handleBottom">
      <div class="fd-left">
          <div class="fd-img">
              <img :src="song.base.songs.al.picUrl" alt="">
          </div>
          <div class="fd-text">
              <div class="fd-title">{{song.base.name}}</div>
              <div class="fd-lyric">我也不知道</div>
          </div>
      </div>
      <div class="fd-right">
          <div class="fd-play" id="fd-play">
              <arc-progress ref="arcProgress"></arc-progress>
          </div>
          <div class="fd-more">
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
        })
    },
    mounted () {
        this.$refs.arcProgress.init(document.getElementById('fd-play'))
    },
    methods: {
        ...mapMutations({
            setIsOpenPlay: 'SET_IS_OPEN_PLAY'
        }),
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
    .fd-left{
        display: flex;
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
            .fd-title{
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
        .fd-play{
            margin-right: 40px;
            width: 55px;
            height: 55px;
            display: flex;
            justify-content: center;
            align-items: center; 
        }
        .fd-more{
            .iconfont{
                font-size: 45px;
            }
        }
    }
}
</style>