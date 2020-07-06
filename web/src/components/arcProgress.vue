<template>
  <div class="fd-arcProgress">
    <canvas id="myC"></canvas>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState('song', {
        audio: 'audio'
      })
    },
    data() {
      return {
        parentWidth: 0
      }
    },
    methods: {
      /**
       * @description: 初始化播放按钮
       * @param {dom} dom 父元素dom
       * @return: 
       */
      init(dom) {
        this.parentWidth = dom.clientWidth
        let myC = document.getElementById('myC')
        this.drawCircle(myC, 0)
        let that = this
        this.audio.addEventListener('timeupdate', function () {
          if (!isNaN(that.audio.duration)) {
              let progressValue = that.audio.currentTime/that.audio.duration //用时间比来获取进度条的值
              if(progressValue == 1){
                  progressValue=0 //当播放完成，进度条跳到开始
              }
              that.drawCircle(myC,progressValue)
          }
        }, false)
      },
      /**
       * @description: canvase画播放按钮
       * @param {type} 
       * @return: 
       */
      drawCircle(canvas, percentage) {
        let clientWidth = this.parentWidth
        let canvasWidth = Math.floor(clientWidth)
        let innerR = canvasWidth * 0.8 * 0.5//半径
        let ctx
        canvas.setAttribute('width', canvasWidth + 'px')
        canvas.setAttribute('height', canvasWidth + 'px')
        if (canvas.getContext) {
          ctx = canvas.getContext("2d")
        }
        ctx.translate(canvasWidth / 2, canvasWidth / 2)
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
</style>