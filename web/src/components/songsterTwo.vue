<template>
  <div @click.stop="handerSongsterClick">
    <div class="fd-img">
      <img v-lazy="songster.picUrl" alt="">
    </div>
    <div class="fd-details">
      <div class="fd-left">
        <div class="fd-tops">
          <div class="fd-name fd-textOverflow">{{songster.name}}</div>
          <div class="fd-author fd-textOverflow">- {{songster.artists[0].name}}</div>
        </div>
        <div class="fd-bottom">
          <span class="fd-flag">独家</span>
          <div class="fd-text fd-textOverflow" >{{'我想做一个能在你的葬礼上描述你一生的人'}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    songster: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapMutations({
      setIsOpenSongster: 'SET_IS_OPEN_SONGSTER'
    }),
    handerSongsterClick() {
      this.setIsOpenSongster(true)
      this.$nextTick(() => {
        this.$root.$emit('songsterInfo', this.songster)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
$lenght: 120px;
$widthLen: calc(100% - 120px);
.fd-img{
  float: left;
  width: $lenght;;
  height: $lenght;
  img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
}
.fd-details{
  width: $widthLen;
  height: $lenght;
  padding: 0 30px 0 10px;
  float: left;
  display: flex;
  .fd-left{
    width: calc(100% - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    .fd-tops{
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .fd-name{
        max-width: 70%;
        padding-right: 20px;
        font-size: 30px;
      }
      .fd-author{
        max-width: 30%;
        font-size: 23px;
        color: #818181;
      }
    }
    .fd-bottom{
      display: flex;
      align-items: center;
      .fd-flag{
        font-size: 15px;
        border: 1.5px solid #ff2f2b;
        color: #ff2f2b;
        display: inline-block;       
        padding: 0px 3px;
        font-weight: bold;
        margin-right: 10px;
        white-space: nowrap;                          
      }
      .fd-text{
        font-size: 23px;
        color: #818181;
      }
    }
  }
  .fd-right{
      width: 60px;
      color: #ff2b3c;
      display: flex;
      align-items: center;
      justify-content: center;
      .fd-item{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #ebebeb;
        box-shadow: 0px 0px 3px #888888;
        display: flex;
        align-items: center;
        justify-content: center;
        .iconfont{
          font-size: 25px;
        }
      }
  }
}
</style>