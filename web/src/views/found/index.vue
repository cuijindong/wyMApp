<!--
 * @Author: cjd
 * @Date: 2020-05-20 21:15:42
--> 
<template>
    <div class="fd-found">
        <div class="fd-swipe">
            <van-swipe :autoplay="3000" indicator-color="red">
                <van-swipe-item><img src="http://img1.imgtn.bdimg.com/it/u=3960632197,3985528648&fm=15&gp=0.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img src="http://img3.imgtn.bdimg.com/it/u=1551996985,1809089666&fm=26&gp=0.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img src="http://img2.imgtn.bdimg.com/it/u=25213714,3947153134&fm=26&gp=0.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img src="http://img1.imgtn.bdimg.com/it/u=3960632197,3985528648&fm=15&gp=0.jpg" alt=""></van-swipe-item>
            </van-swipe>
        </div>
        <div class="fd-content">
            <div class="fd-tap">
                <div class="fd-tap-item">
                    <div class="fd-icon"></div>
                    <div class="fd-label">每日推荐</div>
                </div>
                <div class="fd-tap-item">
                    <div class="fd-icon"></div>
                    <div class="fd-label">歌单</div>
                </div>
                <div class="fd-tap-item">
                    <div class="fd-icon"></div>
                    <div class="fd-label">排行榜</div>
                </div>
                <div class="fd-tap-item">
                    <div class="fd-icon"></div>
                    <div class="fd-label">电台</div>
                </div>
                <div class="fd-tap-item">
                    <div class="fd-icon"></div>
                    <div class="fd-label">直播</div>
                </div>
            </div>
            <div class="fd-xAxisList fd-marginBott">
                <div class="fd-top">
                    <div class="fd-title">懂你的精选歌单</div>
                    <div class="fd-button">查看更多</div>
                </div>
                <div class="fd-list">
                    <div class="fd-item">
                        <div class="fd-img">
                            <img src="../../assets/img/test1.jpg" alt="">
                        </div>
                        <div class="fd-details">[周一的好听]塔塔的满族智力不太行</div>
                    </div>
                    <div class="fd-item">
                        <div class="fd-img">
                            <img src="../../assets/img/test2.jpg" alt="">
                        </div>
                        <div class="fd-details">无敌哈了哨，zbc，已给窝里giao！gaio</div>
                    </div>
                    <div class="fd-item">
                        <div class="fd-img">
                            <img src="../../assets/img/test1.jpg" alt="">
                        </div>
                        <div class="fd-details">八一和列，今天来点小鸟伏特加哦，来征稿，我特么奢侈一把</div>
                    </div>
                    <div class="fd-item">
                        <div class="fd-img">
                            <img src="../../assets/img/test2.jpg" alt="">
                        </div>
                        <div class="fd-details">无情哈了哨！！</div>
                    </div>
                    <div class="fd-item">
                        <div class="fd-img">
                            <img src="../../assets/img/test1.jpg" alt="">
                        </div>
                        <div class="fd-details">我丢，好烦啊，火花</div>
                    </div>
                    <div class="fd-item">
                        <div class="fd-img">
                            <img src="../../assets/img/test2.jpg" alt="">
                        </div>
                        <div class="fd-details">怎么说呢，火花，一给窝里giaogiao</div>
                    </div>
                </div>
            </div>
            <div class="fd-yAxisList fd-marginBott">
                <div class="fd-top">
                    <div class="fd-title">深长悠远的古风歌</div>
                    <div class="fd-button">播放全部</div>
                </div>
                <div class="fd-list">
                    <div class="fd-item">
                        <div class="fd-item-item">
                            <div class="fd-img">
                                <img src="../../assets/img/t1.jpg" alt="">
                            </div>
                            <div class="fd-details">
                                <div class="fd-left">
                                    <div class="fd-tops">
                                        <div class="fd-name fd-textOverflow">红色豆豆鞋</div>
                                        <div class="fd-author">- giao哥</div>
                                    </div>
                                    <div class="fd-bottom">
                                        <span class="fd-flag">独家</span>
                                        <div class="fd-text">一城烟雨一楼台一花只为一树开</div>
                                    </div>
                                </div>
                                <div class="fd-right"></div>
                            </div>
                        </div>
                        <div class="fd-item-item">
                            <div class="fd-img">
                                <img src="../../assets/img/t2.jpg" alt="">
                            </div>
                            <div class="fd-details">
                                <div class="fd-left">
                                    <div class="fd-tops">
                                        <div class="fd-name fd-textOverflow">范德萨发生（司法所发生是打分）</div>
                                        <div class="fd-author">- 大地色</div>
                                    </div>
                                    <div class="fd-bottom">
                                        <span class="fd-flag">独家</span>
                                        <div class="fd-text">的的粉色粉色水电费是否是</div>
                                    </div>
                                </div>
                                <div class="fd-right"></div>
                            </div>
                        </div>
                        <div class="fd-item-item">
                            <div class="fd-img">
                                <img src="../../assets/img/t3.jpg" alt="">
                            </div>
                            <div class="fd-details">
                                <div class="fd-left">
                                    <div class="fd-tops">
                                        <div class="fd-name fd-textOverflow">红大幅度舒服舒服色豆豆鞋</div>
                                        <div class="fd-author">- giao哥</div>
                                    </div>
                                    <div class="fd-bottom">
                                        <span class="fd-flag">独家</span>
                                        <div class="fd-text">一城烟雨一楼台一花只为一树开</div>
                                    </div>
                                </div>
                                <div class="fd-right"></div>
                            </div>
                        </div>
                    </div>
                    <div class="fd-item"></div>
                    <div class="fd-item"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
.fd-found{
    width: 100%;
    .fd-swipe{
        // width: 100%;
        height: 250px;
        .van-swipe{
            height: 100%;
            .van-swipe-item{
                img{
                    width: calc(100% - 40px);
                    border-radius: 10px;
                    height: 100%;
                }
            }
        }
    }
    .fd-content{
        padding: 0 20px;
        .fd-tap{
            height: 150px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .fd-tap-item{
                display: flex;
                flex-direction: column;
                .fd-icon{
                    height: 80px;
                    width: 80px;
                    border-radius: 50%;
                    background-color: #ff5a4c;
                    background-image: linear-gradient(to right, #ff5a4c , #ff1e12);
                    margin-bottom: 10px;
                }
                .fd-label{
                    font-size: 18px;
                }
            }
        }
        .fd-xAxisList{
            .fd-top{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 10px 0;
                .fd-title{
                    font-size: 30px;
                    font-weight: bold;
                    color: #242424;
                }
                .fd-button{
                    font-size: 22px;
                    padding: 5px 15px;
                    border: 1px solid #ebebeb;
                    border-radius: 50px;
                }
            }
            .fd-list{
                &:-webkit-scrollbar{
                    display: none;
                }
                display: flex;
                width: 100%;
                overflow: auto;
                .fd-item{
                    margin-right: 20px;
                    width: 180px;
                    .fd-img{
                        img{
                            width: 180px;
                            height: 180px;
                            border-radius: 10px;
                        }
                    }
                    .fd-details{
                        width: 100%;
                        text-align: left;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                }
            }
        }
        .fd-yAxisList{
            .fd-top{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 10px 0;
                .fd-title{
                    font-size: 30px;
                    font-weight: bold;
                    color: #242424;
                }
                .fd-button{
                    font-size: 22px;
                    padding: 5px 15px;
                    border: 1px solid #ebebeb;
                    border-radius: 50px;
                }
            }
            .fd-list{
                width: 100%;
                overflow: auto;
                .fd-item{
                    width: 100%;
                    .fd-item-item{
                        width: 100%;
                        margin: 15px 0;
                        overflow: hidden;
                        .fd-img{
                            float: left;
                            width: 90px;;
                            height: 90px;
                            img{
                                width: 100%;
                                height: 100%;
                                border-radius: 10px;
                            }
                        }
                        .fd-details{
                            width: calc(100% - 90px);
                            height: 90px;
                            padding: 0 30px 0 10px;
                            float: left;
                            display: flex;
                            .fd-left{
                                width: calc(100% - 40px);
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                .fd-tops{
                                    display: flex;
                                    margin-bottom: 10px;
                                    .fd-name{
                                        font-size: 25px;
                                        max-width: 70%;
                                        padding-right: 20px;
                                    }
                                    .fd-author{
                                        max-width: 30%;
                                    }
                                }
                                .fd-bottom{
                                    display: flex;
                                    align-items: center;
                                    .fd-flag{
                                        font-size: 12px;
                                        border: 1px solid #ff2f2b;
                                        color: #ff2f2b;
                                        display: inline-block;       
                                        padding: 1px 5px;
                                        margin-right: 10px;                           
                                    }
                                    .fd-text{

                                    }
                                }
                            }
                            .fd-right{
                                width: 40px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>