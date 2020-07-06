import utils from '../utils'
export default {
  data() {
    return {
      // 滚动条位置
      scrollPosition: 0
    }
  },
  // keep-alive组件激活时触发
  activated () {
    // 设置滚动条位置
    document.getElementsByClassName('fd-scroll')[0].scrollTop = this.scrollPosition
  },
  methods: {
    /**
     * 滚动触发（debounce：防抖）
     */
    handlerScroll: utils.dAndT.debounce('getScrollTop', 100, false),
    /**
     * 获取当前滚动轴位置
     */
    getScrollTop() {
      this.scrollPosition = document.getElementsByClassName('fd-scroll')[0].scrollTop
    },
  },
}