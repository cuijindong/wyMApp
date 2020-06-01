import type from './mutation-type'

export default {
  changeUserInfo({commit}, info) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try{
          let userInfo = `this is ${info}`
          commit(type.SET_USER_INFO, userInfo)
          resolve()
        } catch(e) {
          reject(e)
        }
      }, 1000);
    })
  }
}