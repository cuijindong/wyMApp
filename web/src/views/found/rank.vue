<template>
  <div class="fd-yAxisList fd-marginBott">
      <div class="fd-top">
          <div class="fd-title">热歌风向标</div>
          <div class="fd-button">播放全部</div>
      </div>
      <div class="fd-list">
          <van-swipe :loop="false" :show-indicators="false" @change="change">
              <van-swipe-item v-for="(item, index) in rankList_c" :key="index">
                  <div :id="`item${index}`" class="fd-item" :style="`background-image:linear-gradient(to top, rgba(65, 65, 65, 1) 50%, rgb(65, 65, 65, 0.5) 100%), url(${item.tracks[0].al.picUrl})`">
                      <div class="fd-item-title">{{item.name}}</div>
                      <div class="fd-item-item" v-for="(v, i) in item.tracks.slice(0, 3)" :key="i">
                          <div class="fd-img">
                              <img :id="`${index}_${i}`" :src="`${v.al.picUrl}?param=80y80`" crossorigin="anonymous" />
                          </div>
                          <div class="fd-details">
                              <div class="fd-left">
                                  <div class="fd-tops">
                                      <div class="fd-name fd-textOverflow">{{v.name}}</div>
                                      <div class="fd-author fd-textOverflow">- {{v.ar[0].name}}</div>
                                  </div>
                              </div>
                              <div class="fd-right">
                                  <div class="fd-item">
                                      <i class="iconfont fd-icon-item">&#xe60f;</i>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </van-swipe-item>
          </van-swipe>
      </div>
  </div>
</template>

<script>
import ColorThief from 'colorthief'
  export default {
    props: {
      rankList: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      rankList_c() {
        let list = this.rankList.map(v => {
          return v.playlist
        })
        return list
      }
    },
    methods: {
      change(index) {
        var colorThief = new ColorThief();
        const img = new Image();
        img.addEventListener('load', () => {
            console.log(colorThief.getColor(img))
        })
        img.crossOrigin = 'Anonymous'
        img.src = this.rankList_c[index].tracks[0].al.picUrl
      }
    },
  }
</script>

<style lang="scss" scoped>
.fd-yAxisList{
    .fd-top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 15px 0;
        .fd-title{
            font-size: 33px;
            font-weight: bold;
            color: #242424;
            padding: 10px 0;
        }
        .fd-button{
            padding: 5px 15px;
            border: 1px solid #ebebeb;
            border-radius: 50px;
            box-shadow: 0px 0px 3px #888888;
        }
    }
    .fd-list{
        width: 100%;
        .fd-item{
            width: 100%;
            padding: 10px;
            background-size: 100% 100%;
            border-radius: 10px;
            background-blend-mode:normal;
            .fd-item-item{
                width: 100%;
                margin: 15px 0;
                overflow: hidden;
                &:first-child{
                    margin-top: 0;
                }
                &:last-child{
                    margin-bottom: 0;
                }
                $lenght: 80px;
                $widthLen: calc(100% - 80px);
                .fd-img{
                    float: left;
                    width: $lenght;;
                    height: $lenght;
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: 10px;
                    }
                }
                .fd-details{
                    width: $widthLen;
                    height: $lenght;
                    padding: 0 30px 0 10px;
                    float: left;
                    display: flex;
                    .fd-left{
                        width: calc(100% - 60px);
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        .fd-tops{
                            display: flex;
                            align-items: center;
                            margin-bottom: 10px;
                            .fd-name{
                                max-width: 70%;
                                padding-right: 20px;
                                font-size: 30px;
                            }
                            .fd-author{
                                max-width: 30%;
                                font-size: 23px;
                                color: #818181;
                            }
                        }
                        .fd-bottom{
                            display: flex;
                            align-items: center;
                            .fd-flag{
                                font-size: 15px;
                                border: 1.5px solid #ff2f2b;
                                color: #ff2f2b;
                                display: inline-block;       
                                padding: 0px 3px;
                                font-weight: bold;
                                margin-right: 10px;
                                white-space: nowrap;                          
                            }
                            .fd-text{
                                font-size: 23px;
                                color: #818181;
                            }
                        }
                    }
                    .fd-right{
                        width: 60px;
                        color: #ff2b3c;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .fd-item{
                            width: 50px;
                            height: 50px;
                            border-radius: 50%;
                            border: 1px solid #ebebeb;
                            box-shadow: 0px 0px 3px #888888;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            .iconfont{
                                font-size: 25px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>