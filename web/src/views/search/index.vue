<!--
 * @Author: cjd
 * @Date: 2020-05-24 17:26:11
 * @type: 搜索页面
-->
<template>
  <div class="fd-search">
    <!-- 头部 -->
    <div class="fd-header">
      <div class="fd-back">
        <i class="iconfont">&#xe65c;</i>
      </div>
      <div class="fd-searchText">
        <input ref="input" type="text" autofocus :placeholder="historyList[0]" v-model="inputWords">
      </div>
      <div class="fd-author"> 
        <i class="iconfont">&#xe601;</i>
      </div>
    </div>
    <!-- 内容 -->
    <div class="fd-content" :class="{'fd-noBottom': !isShowBottom}">
      <div class="fd-content-body">
        <!-- 历史记录 -->
        <div class="fd-history">
          <div class="fd-title">
            <div class="fd-text">历史记录</div>
            <div class="fd-icon">
              <i class="iconfont">&#xe65c;</i>
            </div>
          </div>
          <div class="fd-main">
            <div class="fd-item" v-for="(item, index) in historyList" :key="index">{{item}}</div>
          </div>
        </div>
        <!-- 热搜榜 -->
        <div class="fd-rank">
          <div class="fd-title">
            <div class="fd-text">热搜榜</div>
          </div>
          <div class="fd-list">
            <div class="fd-item" :class="{'fd-three' : index < 3}" v-for="(item, index) in rankList" :key="index">
              <div class="fd-index">{{index + 1}}</div>
              <div class="fd-text">
                <div class="fd-top">
                  <div class="fd-title">
                    <div>{{item.searchWord}}</div>
                    <img v-if="item.iconType" :src="item.iconUrl" :width="item.iconType === 5 ? 20 : 50">
                  </div>
                  <div class="fd-num">{{item.score}}</div>
                </div>
                <div class="fd-bottom">{{item.content}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="fd-bottom" v-if="isShowBottom">
      <home-bottom></home-bottom>
    </div>
    <!-- 弹出层（搜索建议） -->
    <div ref="popup" class="fd-popup" v-show="inputWords">
      <div class="fd-key fd-item">
        <span>搜索</span>
        <span>"{{inputWords}}"</span>
      </div>
      <div class="fd-item" v-for="(item, index) in list" :key="index">
        <span>搜索</span>
        <span>"{{item}}"</span>
      </div>
    </div>
  </div>
</template>

<script>
import homeBottom from '../homeBottom'
import { mapState, mapMutations } from 'vuex'
import utils from '../../utils'
  export default {
    components: {
      homeBottom
    },
    data() {
      return {
        // 历史记录
        historyList: ['挪威新林', '让我将你心儿摘下', '隔壁老樊', '小辫儿', '周全兄'],
        // 热搜榜
        rankList: [],
        // 输入内容
        inputWords: '',
        list: ['隔壁老樊','隔壁老樊','隔壁老樊','隔壁老樊','隔壁老樊','隔壁老樊','隔壁老樊','隔壁老樊']
      }
    },
    computed: {
      ...mapState('song', {
          song: 'song',
      }),
      isShowBottom() {
          return Object.keys(this.song).length ? true : false
      }
    },
    watch: {
      inputWords(newValue) {
        if (newValue) {
          this.getSuggestDebounce()
        } else {
          console.log('colse')
        }
      }
    },
    created () {
      // 搜索防抖
      this.getSuggestDebounce = utils.dAndT.debounce(this, 'getSuggest', 100, false)
      this.init()


    },
    mounted () {
      this.$refs.popup.style.width = this.$refs.input.clientWidth + 'px'
      console.log(this.$refs.popup.style)
    },
    methods: {
      ...mapMutations('song', {
        setAudio: 'SET_AUDIO'
      }),
      /**
       * 初始化
       */
      init() {
        this.getSearchHot()
      },
      /**
       * 获取热搜榜数据
       */
      getSearchHot() {
        this.$http.searchHot().then(response => {
          if (response.code === 200) {
            this.rankList = response.data
          }
        })
      },
      /**
       *  搜索建议
       */
      getSuggest() {
        // 输入值为空，不进行查询（因为做了防抖，所以可能有值为空的时候）
        if(!this.inputWords) {
          return
        }
        let param = {
          type: 'mobile',
          keywords: this.inputWords
        }
        this.$http.suggest(param).then(response => {
          console.log(response)
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.fd-popup{
  border: 1px solid #888888;
  box-shadow: 0px 0px 10px #888888;
  background-color: #ffffff;
  position: absolute;
  z-index: 1001;
  top: 101px;
  text-align: left;
  font-size: 30px;
  .fd-key{
    color: blue;
  }
  .fd-item{
    height: 80px;
    line-height: 80px;
    border-bottom: 1px solid red;
    padding: 0 30px;
  }
  .fd-item:last-child{
    border-bottom: none;
  }
}
.fd-three{
  .fd-index{
    color: #ff3c46 !important;
  }
  .fd-top{
    .fd-title{
      color: #363636 !important;
      font-weight: bold !important;
    }
  }
}
.fd-search{
  height: 100%;
  padding: $PubPadding;
}
.fd-header{
  height: 100px;
  font-size: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .fd-back{
    display: flex;
    margin-right: 40px;
    .iconfont{
      font-size: 40px;
    }
  }
  .fd-searchText{
    flex-grow: 2;
    padding: 10px 0;
    border-bottom: 1px solid #000;
    input{
      width: 100%;
      font-size: 35px;
    }
  }
  .fd-author{
    display: flex;
    margin-left: 40px;
    .iconfont{
      font-size: 40px;
    }
  }
}
.fd-title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  .fd-text{
    color: #242424;
    font-weight: bold;
  }
  .fd-icon{
    .iconfont{
      font-size: 25px;
    }
  }
}
.fd-history{
  .fd-main{
    margin-top: 20px;
    display: flex;
    overflow-x: auto;
    .fd-item{
      padding: 10px 20px;
      background-color: #f3f3f3;
      border-radius: 25px;
      margin: 0 10px;
      white-space: nowrap;
    }
  }
}
.fd-rank{
  margin-top: 60px;
  .fd-list{
    .fd-item{
      display: flex;
      align-items: center;
      margin: 20px 0;
      .fd-index{
        font-size: 30px;
        color: #9f9f9f;
        width: 60px;
        padding-right: 20px;
      }
      .fd-text{
        flex-grow: 2;
        .fd-top{
          display: flex;
          justify-content: space-between;
          padding-bottom: 5px;
          .fd-title{
            font-size: 30px;
            img{
              margin-left: 20px;
            }
          }
          .fd-num{
            color: #cbcbcb;
          }
        }
        .fd-bottom{
          padding-top: 5px;
          text-align: left;
          color: #cbcbcb;
        }
      }
    }
  }
}
.fd-content-body{
  height: 100%;
  overflow-y: auto;
}
.fd-content{
   width: 100%;
   height: calc(100% - 200px);
   padding-top: 60px;
   padding-bottom: 20px;
   overflow: hidden;
}
.fd-noBottom{
  height: calc(100% - 100px);
}
</style>