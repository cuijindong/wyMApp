<!--
 * @Author: cjd
 * @detaile: 播放按钮
 * @Date: 2020-05-18 21:37:00
--> 
<template>
  <div class="fd-arcProgress">
    <canvas id="myC" @click.stop="playChange"></canvas>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState('song', {
        audio: 'audio'
      }),
    },
    data() {
      return {
        parentWidth: 0,     // 父元素宽度
        progressValue: 0,   // 歌曲播放进度
      }
    },
    inject: ['audioInfo'],
    watch: {
      audioInfo: {
        handler() {
          this.init(document.getElementById('fd-play'))
        },
        deep: true
      }
    },
    methods: {
      /**
       * @description: 播放/暂停
       * @param
       * @return: 
       */
      playChange() {
        let audio = this.audio
        if (audio.paused) {
          audio.play()
        } else {
          this.audio.pause()
        }
      },
      /**
       * @description: 初始化播放按钮
       * @param {dom} dom 父元素dom
       * @return: 
       */
      init(dom) {
        this.parentWidth = dom.clientWidth
        let myC = document.getElementById('myC')
        let progressValue = this.audioInfo.currentTime / this.audioInfo.duration  //用时间比来获取进度条的值              
        
        this.drawCircle(myC, progressValue)
      },
      /**
       * @description: canvase画播放按钮
       * @param {canvas} canvas
       * @param {percentage} 进度百分比
       * @return: 
       */
      drawCircle(canvas, percentage) {
        let clientWidth = this.parentWidth
        let ctx
        if (canvas.getContext) {
          ctx = canvas.getContext("2d")
        }
        // 解决移动端模糊，（先放大在缩小）
        let dpr = window.devicePixelRatio
        let canvasWidth = Math.floor(clientWidth)
        let innerR = canvasWidth * 0.8 * 0.5//半径
        canvas.width = canvasWidth * dpr
        canvas.height =  canvasWidth * dpr
        canvas.style.width = canvasWidth + 'px';
        canvas.style.height = canvasWidth + 'px';
        ctx.scale(dpr,dpr)
        ctx.translate(canvasWidth / 2, canvasWidth / 2)
        // *********************************
        ctx.beginPath()
        ctx.arc(0, 0, innerR, 0, Math.PI * 2)
        ctx.lineWidth = 2
        ctx.strokeStyle = "#F0F0F0"
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(0, 0, innerR, Math.PI * 1.5, (Math.PI * 1.5 + Math.PI * 2 / 180 + percentage * Math.PI * 2))
        ctx.lineWidth = 2
        ctx.strokeStyle = "red"
        ctx.stroke()
        if (this.audio.paused) {
          let side = innerR / 1.5
          let centreSide = side * Math.cos(Math.PI / 6)
          ctx.beginPath()
          ctx.moveTo(-centreSide * 0.42265,-side / 2)
          ctx.lineTo(centreSide * 0.57735, 0)
          ctx.lineTo(-centreSide * 0.42265,side / 2)
          ctx.lineWidth = 2
          ctx.strokeStyle = "#F0F0F0"
          ctx.closePath()
          ctx.stroke()
        } else {
          let equalx = innerR / 8
          let equaly = innerR / 3
          ctx.beginPath()
          ctx.moveTo(-equalx, equaly)
          ctx.lineTo(-equalx, -equaly)
          ctx.stroke()
          ctx.beginPath()
          ctx.moveTo(equalx, equaly)
          ctx.lineTo(equalx, -equaly)
          ctx.stroke()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.iconfont{
    font-size: 35px
}
.fd-arcProgress{
  height: 100%;
}
</style>