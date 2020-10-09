<!--
 * @Author: cjd
 * @detaile: 歌单（单个）
 * @Date: 2020-05-24 17:29:47
--> 
<template>
  <div>
      <div class="fd-img" @click.stop="handerSongsterClick">
          <img v-lazy="songster.picUrl || songster.coverImgUrl" alt="">
          <div class="fd-playCount">
              <i class="iconfont fd-icon-item">&#xe774;</i>
              <span>{{songster.playCount | filteNum}}</span>
          </div>
      </div>
      <div class="fd-details">{{songster.name}}</div>
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
  //过滤器
  filters: {
    filteNum: function(value) {
      return tranNumber(value);
      function tranNumber(num, point = 0) {
        let numStr = num.toString()
        // 十万以内直接返回 
        if (numStr.length < 6) {
            return numStr;
        }
        //大于8位数是亿
        else if (numStr.length > 8) {
            point = 1
            let decimal = numStr.substring(numStr.length - 8, numStr.length - 8 + point);
            return parseFloat(parseInt(num / 100000000) + '.' + decimal) + '亿';
        }
        //大于6位数是十万 (以10W分割 10W以下全部显示)
        else if (numStr.length > 5) {
            let decimal = numStr.substring(numStr.length - 4, numStr.length - 4 + point)
            return parseFloat(parseInt(num / 10000) + '.' + decimal) + '万';
        }
      }
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
.fd-img{
    position: relative;
    img{
        width: 200px;
        height: 200px;
        border-radius: 10px;
    }
    .fd-playCount{
        position: absolute;
        top: 10px;
        right: 10px;
        color: #fff;
        font-size: 20px;
        display: flex;
        align-items: center;
        .fd-icon-item{
            font-size: 23px;
            font-weight: 600;
        }
    }
}
.fd-details{
    width: 100%;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>