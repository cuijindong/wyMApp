<!--
 * @Author: cjd
 * @Date: 2020-06-02 21:41:39
--> 
<template>
  <div class="fd-play">
    <div class="fd-header">
      <p-header></p-header>
    </div>
    <div class="fd-content"></div>
    <div class="fd-bottom">
      <p-bottom></p-bottom>
    </div>
  </div>
</template>

<script>
import pHeader from './pHeader'
import pBottom from './pBottom'
  export default {
    components: {
      pHeader,
      pBottom
    },
  }
</script>

<style lang="scss" scoped>
.fd-play{
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url('../../assets/img/play/playBg.png');
  background-blend-mode:normal;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: $PubPadding;
  color: beige;
}
</style>