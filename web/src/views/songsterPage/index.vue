<template>
  <div class="fd-songsterPage">
    <!-- header -->
    <div class="fd-header">
      <div class="fd-left">
        <div class="fd-back" @click="close">
          <i class="iconfont">&#xe65c;</i>
        </div>
      </div>
      <div class="fd-text">
        <div class="fd-titleH">歌单</div>
      </div>
      <div class="fd-right" @click="share">
        <i class="iconfont">&#xe623;</i>
      </div>
    </div>
    <van-loading color="#1989fa" v-if="!isRender"/>
    <div class="fd-info" v-if="isRender">
      <!-- 歌单描述 -->
      <div class="fd-content">
        <div class="fd-img">
          <img v-lazy="songsterInfo.picUrl || songsterInfo.coverImgUrl" alt="">
        </div>
        <div class="fd-right">
          <div class="fd-name fd-textOverflow2">{{songsterInfo.name}}</div>
          <div class="fd-auto">
            <img v-lazy="songsterInfo.creator.backgroundUrl" alt="">
            <div class="fd-autoname">{{songsterInfo.creator.nickname}}</div>
          </div>
          <div class="fd-signature fd-textOverflow2">{{songsterInfo.creator.signature}}</div>
        </div>
      </div>
      <!-- 歌曲列表 -->
      <div class="fd-list">
        <div v-for="(item, index) in songsterInfo.tracks" :key="index" class="fd-item" @click.stop="$coment.handlePlay(item, songsterInfo.tracks)">
          <div class="fd-index">{{index + 1}}</div>
          <div class="fd-song">
            <div class="fd-name">{{item.name}}</div>
            <div class="fd-auto">&nbsp;&nbsp;-&nbsp;&nbsp;{{item.ar[0].name}}</div>
          </div>
          <div class="fd-icon">
            <i class="iconfont fd-first" @click.stop="handlerMore">&#xe635;</i>
            <i class="iconfont" @click.stop="handlerMore">&#xe610;</i>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
import { Toast } from 'vant'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      songsterInfo: {},
      isRender: false
    }
  },
  created() {
    this.$root.$on('songsterInfo', this.init)
  },
  beforeDestroy() {
    this.$root.$off('songsterInfo')
  },
  methods: {
    ...mapMutations({
      setIsOpenSongster: 'SET_IS_OPEN_SONGSTER'
    }),
    /**
     * 初始化
     */
    init(songsterInfo) {
      this.$http.songsterDetail({id : songsterInfo.id}).then(response => {
        if (response.code === 200) {
          this.songsterInfo = response.playlist
          this.isRender = true
        }
      })
    },
    handlerMore() {
      Toast({
        message: '暂未开发...',
        position: 'top',
      })
    },
    /**
     * 关闭歌单信息
     */
    close() {
      this.setIsOpenSongster(false)
    },
    /**
     * 分享
     */
    share() {
      Toast({
        message: '暂未开发...',
        position: 'top',
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.van-loading{
  top: 50%;
}
.fd-songsterPage{
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  color: beige;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url('../../assets/img/play/playBg.png');
  background-size: cover;
  background-blend-mode:normal;
  background-repeat: no-repeat;
}
.fd-header{
  height: 120px;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: $PubPadding;
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
.fd-info{
  height: 100%;
}
.fd-content{
  height: 40%;
  padding: $PubPadding;
  padding-top: 120px;
  display: flex;
  align-items: center;
  .fd-img{
    padding-right: 40px;
    img{
      width: 200px;
      height: 200px;
      border-radius: 10px;
    }
  }
  .fd-right{
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    .fd-name{
      font-size: 35px;
    }
    .fd-auto{
      font-size: 25px;
      color: #c8c9cc;
      display: flex;
      align-items: center;
      img{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-right: 20px;
      }
    }
    .fd-signature{
      color: #a7a7a7;
    }
  }
}
.fd-list{
  height: 60%;
  padding: $PubPadding;
  border-radius: 50px 50px 0 0;
  background: #ffffff;
  overflow: auto;
  color: black;
  .fd-item{
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .fd-index{
      width: 40px;
      font-size: 35px;
      display: flex;
      justify-content: center;
      margin-right: 40px;
      color: #818181;
    }
    .fd-song{
      flex-grow: 1;
      text-align: left;
      display: flex;
      align-items: center;
      .fd-name{
        font-size: 35px;
      }
      .fd-auto{
        color: #818181;
      }
    }
    .fd-icon{
      .fd-first{
        margin-right: 40px;
      }
      .iconfont{
        font-size: 35px;
        color: #818181;
      }
    }
  }
}
</style>