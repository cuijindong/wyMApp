<template>
  <div class="fd-header">
    <div class="fd-left">
      <div class="fd-back">
        <i class="iconfont">&#xe64e;</i>
      </div>
      <div class="fd-text">
        <div class="fd-title">{{song.base.name}}</div>
        <div class="fd-author">{{song.base.artists[0].name}}</div>
      </div>
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

</style>