<template>
  <div class="fd-play">
    <div class="fd-header">
      <p-header></p-header>
    </div>
    <div class="fd-content"></div>
    <div class="fd-bottom"></div>
  </div>
</template>

<script>
import pHeader from './pHeader'
  export default {
    components: {
      pHeader,
    },
  }
</script>

<style lang="scss" scoped>
.fd-play{
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  background-image: url('../../assets/img/play/playBg.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  filter: blur(5px);
  color: beige;
}
</style>