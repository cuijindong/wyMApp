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
          <div class="fd-play">
              <i class="iconfont">&#xe774;</i>
          </div>
          <div class="fd-more">
              <i class="iconfont">&#xe615;</i>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
  export default {
    computed: {
        ...mapState('song', {
            song: 'song'
        })
    },
    methods: {
        ...mapMutations({
            setIsOpenPlay: 'SET_IS_OPEN_PLAY'
        }),
        handleBottom() {
            debugger
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
            height: 70px;
            width: 70px;
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                box-shadow: 0px 0px 3px #888888;
            }
        }
        .fd-text{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
            text-align: left;
            .fd-title{
                font-size: 22px;
                margin-bottom: 5px;
            }
            .fd-lyric{
                margin-top: 5px;
                font-size: 16px;
            }
        }
    }
    .fd-right{
        display: flex;
        align-items: center;
        .fd-play{
            margin-right: 40px;
            border: 1px solid #000;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            .iconfont{
                font-size: 25px;
            }
        }
        .fd-more{
            .iconfont{
                font-size: 33px;
            }
        }
    }
}
</style>