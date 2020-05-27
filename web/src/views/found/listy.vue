<template>
    <div class="fd-yAxisList fd-marginBott">
        <div class="fd-top">
            <div class="fd-title">深长悠远的古风歌</div>
            <div class="fd-button">播放全部</div>
        </div>
        <div class="fd-list">
            <van-swipe :loop="false" :show-indicators="false">
                <van-swipe-item v-for="(item, index) in gqList_c" :key="index">
                    <div class="fd-item">
                        <div class="fd-item-item" v-for="(v, i) in item" :key="i">
                            <div class="fd-img">
                                <img v-if="v.songs" :src="v.songs.al.picUrl" alt="">
                            </div>
                            <div class="fd-details">
                                <div class="fd-left">
                                    <div class="fd-tops">
                                        <div class="fd-name fd-textOverflow">{{v.name}}</div>
                                        <div class="fd-author fd-textOverflow">- {{v.artists[0].name}}</div>
                                    </div>
                                    <div class="fd-bottom">
                                        <span class="fd-flag">独家</span>
                                        <div class="fd-text fd-textOverflow" v-if="v.comment">{{v.comment.hotComments[0].content}}</div>
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
    export default {
        props: {
            gqList: {
                type: Array,
                default: () => []
            },
        },
        computed: {
            gqList_c() {
                let arr = []
                let len = this.gqList.length / 3
                for (let i = 1; i <= len; i++) {
                    arr.push(this.gqList.slice((i - 1) * 3, i * 3))
                }
                return arr
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
                $lenght: 120px;
                $widthLen: calc(100% - 120px);
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