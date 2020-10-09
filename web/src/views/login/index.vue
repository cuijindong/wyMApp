<template>
  <div class="fd-home">
    <div class="fd-logo">
      <div class="fd-img"></div>
    </div>
    <div class="fd-login">
      <div class="fd-content">
        <div class="fd-item fd-input">
          <i class="iconfont">&#xe658;</i>
          <input type="text" placeholder="手机号" v-model="phone">
        </div>
        <div class="fd-item fd-input">
          <i class="iconfont">&#xe66c;</i>
          <input type="text" placeholder="密码" v-model="passWord">
        </div>
        <div class="fd-item fd-button">
          <button @click="login">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      phone: '18846165249',    // 手机号
      passWord: '15946193761z'  // 密码
    }
  },
  computed: {
    ...mapState({
      userInfo: 'userInfo'
    })
  },
  methods: {
    ...mapMutations({
      setUserInfo: 'SET_USER_INFO'
    }),
    /**
     * 检测登陆信息(待完善)
     */
    checkParam(param) {
      if (!param.phone) {
        return false
      }
      if (!param.password) {
        return false
      }
      return true
    },
    /**
     * 登陆
     */
    login () {
      let param = {
        phone: this.phone,
        password: this.passWord
      }
      if (!this.checkParam(param)) return false
      this.$http.cellphone(param).then(response => {
        if (response.code === 200) {
          this.setUserInfo(response)
          window.localStorage.setItem('accessToken', response.token)
          console.log(this.userInfo)
          this.$router.push('/')
        } else {
          Toast({
            message: response.message,
            position: top
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.fd-home{
  height: 100%;
  padding: 0 100px;
  background-color: red;
}
.fd-logo{
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  .fd-img{
    width: 120px;
    height: 120px;
    background: url('../../assets/img/logo.png') no-repeat;
    background-size: 100% 100%;
  }
}
.fd-login{
  height: 50%;
  display: flex;
  align-items: flex-end;
  .fd-content{
    width: 100%;
    // margin-bottom: 100px;
    .fd-item{
      margin: 50px 0;
      height: 80px;
    }
    .fd-input{
      border-bottom: 2px solid #ffffff;
      .iconfont{
        font-size: 50px;
        color: #ffffff;
        margin-right: 20px;
      }
      input{
        color: #ffffff;
        background: red;
        width: calc(100% - 80px);
        font-size: 50px;
        &::placeholder{
          color: #dcdee0;
        }
      }
    }
    .fd-button{
      button{
        width: 100%;
        font-size: 40px;
        color: red;
        padding: 20px 0;
        background: #ffffff;
        border-radius: 100px;
        &:active{
          background: #dcdee0;
        }
      }
    }
  }
}
</style>