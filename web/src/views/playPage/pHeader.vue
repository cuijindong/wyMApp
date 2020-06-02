<!--
 * @Author: cjd
 * @Date: 2020-06-02 21:41:39
--> 
<template>
  <div class="fd-header">
    <div class="fd-left">
      <div class="fd-back">
        <i class="iconfont">&#xe65c;</i>
      </div>
    </div>
    <div class="fd-text">
      <div class="fd-title">{{song.base.name}}</div>
      <div class="fd-author">{{song.base.artists[0].name}}</div>
    </div>
    <div class="fd-right">
      <i class="iconfont">&#xe623;</i>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState('song', {
        song: 'song'
      })
    }
  }
</script>

<style lang="scss" scoped>
.fd-header{
  height: 120px;
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
    .fd-title{
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