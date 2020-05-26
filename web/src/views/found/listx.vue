<!--
 * @Author: cjd
 * @Date: 2020-05-24 17:29:47
--> 
<template>
    <div class="fd-xAxisList fd-marginBott">
        <div class="fd-top">
            <div class="fd-title">{{title}}</div>
            <div class="fd-button">查看更多</div>
        </div>
        <div class="fd-list">
            <div class="fd-item" v-for="(item, index) in gdList" :key="index">
                <div class="fd-img">
                    <img :src="item.picUrl || item.coverImgUrl" alt="">
                    <div class="fd-playCount">
                        <i class="iconfont fd-icon-item">&#xe774;</i>
                        <span>{{item.playCount | filteNum}}</span>
                    </div>
                </div>
                <div class="fd-details">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            gdList: {
                type: Array,
                default: () => []
            },
            title: {
                type: String,
                default: ''
            }
        },
        filters: {
            filteNum: function(value) {
                return tranNumber(value);
                function tranNumber(num, point = 0) {
                    let numStr = num.toString()
                    // 十万以内直接返回 
                    if (numStr.length < 6) {
                        return numStr;
                    }
                    //大于8位数是亿
                    else if (numStr.length > 8) {
                        point = 1
                        let decimal = numStr.substring(numStr.length - 8, numStr.length - 8 + point);
                        return parseFloat(parseInt(num / 100000000) + '.' + decimal) + '亿';
                    }
                    //大于6位数是十万 (以10W分割 10W以下全部显示)
                    else if (numStr.length > 5) {
                        let decimal = numStr.substring(numStr.length - 4, numStr.length - 4 + point)
                        return parseFloat(parseInt(num / 10000) + '.' + decimal) + '万';
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.fd-xAxisList{
    .fd-top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0;
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
        &:-webkit-scrollbar{
            display: none;
        }
        display: flex;
        width: 100%;
        overflow: auto;
        .fd-item{
            margin-right: 20px;
            width: 200px;
            .fd-img{
                position: relative;
                img{
                    width: 200px;
                    height: 200px;
                    border-radius: 10px;
                }
                .fd-playCount{
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    color: #fff;
                    font-size: 20px;
                    display: flex;
                    align-items: center;
                    .fd-icon-item{
                        font-size: 23px;
                        font-weight: 600;
                    }
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
</style>