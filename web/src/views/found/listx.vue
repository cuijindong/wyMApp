<!--
 * @Author: cjd
 * @detaile: 歌单
 * @Date: 2020-05-24 17:29:47
--> 
<template>
    <div class="fd-xAxisList fd-margin">
        <div class="fd-top">
            <div class="fd-title">{{title}}</div>
            <div class="fd-button">查看更多</div>
        </div>
        <div class="fd-list">
            <div class="fd-item" v-for="(item, index) in gdList" :key="index">
                <songster :songster="item"></songster>
            </div>
        </div>
    </div>
</template>

<script>
import songster from '../../components/songster'
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
        components: {
            songster    // 歌单
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
        }
    }
}
</style>