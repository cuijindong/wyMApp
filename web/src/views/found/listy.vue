<template>
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
                        <div class="fd-right">
                            <div class="fd-item">
                                <i class="iconfont fd-icon-item">&#xe60f;</i>
                            </div>
                        </div>
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
</template>

<script>
    export default {
        
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
        overflow: auto;
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