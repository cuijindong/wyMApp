module.exports = {
  /**
   *  防抖 
   *  @param vue 当前实例
   *  @param funName 方法名
   *  @param wait 防抖时间
   *  @param immediate：true立即执行，false延迟执行
   **/
  debounce(vue, funName, wait, immediate) {
    let timeout
    return function () {
      if (timeout) clearTimeout(timeout)
      if (immediate) {
        let callNow = !timeout
        timeout = setTimeout(() => {
          timeout = null
        }, wait)
        if (callNow) vue[funName]()
      } else {
        timeout = setTimeout(() => {
          vue[funName]()
        }, wait);
      }
    }
  },
  /**
   *  节流 （控制次数）
   *  @param vue 当前实例
   *  @param funName 方法名
   *  @param wait 节流时间
   *  @param type 1时间戳，2定时器
   **/
  throttle(vue, funName, wait, type) {
    if (type === 1) {
      let previous = 0
      return function () {
        let now = Date.now()
        if(now - previous > wait) {
          vue[funName]()
          previous = now
        }
      }
    } else if (type === 2) {
      let timeout
      return function () {
        if (timeout) return
        timeout = setTimeout(() => {
          vue[funName]()
          timeout = null
        }, wait);
      }
    }
  }
}