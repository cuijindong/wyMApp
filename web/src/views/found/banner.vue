<!--
 * @Author: cjd
 * @Date: 2020-05-24 17:22:27
--> 
<template>
    <div class="fd-swipe">
        <van-swipe :autoplay="3000" indicator-color="red">
            <van-swipe-item v-for="(item, index) in imgList" :key="index">
                <img :src="item.pic">
                <div class="fd-tit" :style="`background: ${item.titleColor === 'red' ? '#ef3739' : '#4c84bf'};`">{{item.typeTitle}}</div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgList: [],
                type: 1
            }
        },
        mounted () {
            this.init()
        },
        methods: {
            init() {
                this.$http.banner({type: this.type}).then(response => {
                    if (response.code === 200) {
                        this.imgList = response.banners
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
.fd-swipe{
    height: 250px;
    margin: 10px 0 10px 0;
    .van-swipe{
        height: 100%;
        .van-swipe-item{
            position: relative;
            img{
                width: $bannerWidth;
                border-radius: 10px;
                height: 100%;
            }
            .fd-tit{
                position: absolute;
                bottom: 0;
                right: 30px;
                color: #fff;
                font-size: 25px;
                padding: 5px 15px;
                border-radius: 10px 0 10px 0;
            }
        }
    }
}
</style>