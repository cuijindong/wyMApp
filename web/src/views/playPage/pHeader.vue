<!--
 * @Author: cjd
 * @Date: 2020-06-02 21:41:39
--> 
<template>
  <div class="fd-header">
    <div class="fd-left">
      <div class="fd-back" @click="close">
        <i class="iconfont">&#xe65c;</i>
      </div>
    </div>
    <div class="fd-text">
      <div class="fd-titleH">{{song.base.name}}</div>
      <div class="fd-author">{{song.base.artists[0].name}}</div>
    </div>
    <div class="fd-right" @click="share">
      <i class="iconfont">&#xe623;</i>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { Toast } from 'vant';
  export default {
    computed: {
      ...mapState('song', {
        song: 'song'
      })
    },
    methods: {
      ...mapMutations({
        setIsOpenPlay: 'SET_IS_OPEN_PLAY',
      }),
      /**
       * 关闭歌词弹窗
       */
      close() {
        this.setIsOpenPlay(false)
      },
      /**
       * 分享
       */
      share() {
        Toast({
          message: '暂未开发...',
          position: 'top',
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
.fd-header{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .fd-left{
    width: 80px;
    height: 100%;
    display: flex;
    align-items: center;
    .iconfont{
      font-size: 45px;
    }
  }
  .fd-text{
    flex-grow: 1;
    text-align: left;
    .fd-titleH{
      font-size: 35px;
    }
    .fd-author{
      font-size: 28px;
      color: #737373;
    }
  }
  .fd-right{
    width: 80px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .iconfont{
      font-size: 50px;
    }
  }
}
</style>