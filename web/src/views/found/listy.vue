<template>
    <div class="fd-yAxisList fd-margin">
        <div class="fd-top">
            <div class="fd-title">推荐你的钟爱</div>
            <div class="fd-button">播放全部</div>
        </div>
        <div class="fd-list">
            <van-swipe :loop="false" :show-indicators="false">
                <van-swipe-item v-for="(item, index) in gqList_c" :key="index">
                    <div class="fd-item">
                        <div class="fd-item-item" v-for="(v, i) in item" :key="i" @click.stop="handlePlay(v)">
                            <single :song="v" :songList="gqList"></single>
                        </div>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script>
import single from '../../components/single'
    export default {
        props: {
            gqList: {
                type: Array,
                default: () => []
            },
        },
        components: {
            single,   // 歌曲
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
        }
    }
</script>

<style lang="scss" scoped>
.fd-yAxisList{
    .fd-top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 15px 0;
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
            }
        }
    }
}
</style>