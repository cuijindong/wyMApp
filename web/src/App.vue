<!--
 * @Author: cjd
 * @Date: 2020-05-11 22:04:00
 -->
<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  created() {
  }
}
</script>
<style lang="scss">
@import './assets/css/index.scss';
#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
