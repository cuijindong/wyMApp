<!--
 * @Author: cjd
 * @detaile: 首页
 * @Date: 2020-05-11 22:12:20
 -->
<template>
    <div class="fd-home">
        <!-- 头部 -->
        <home-header @changeComp="handleChangeComp"></home-header>
        <!-- 内容区 -->
        <div class="fd-content">
            <keep-alive>
                <component :is="comp"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import homeHeader from '@/views/homeHeader.vue'
import my from '@/views/my'
import found from '@/views/found'
import clouds from '@/views/clouds'
import videoapp from '@/views/videoapp'
import { mapState } from 'vuex'
    export default {
        components: {
            homeHeader,
            my,             // 我的
            found,          // 发现
            clouds,         // 云村
            videoapp,       // 视频
        },
        data() {
            return {
                comp: 'found'
            }
        },
        computed: {
            ...mapState({
                isOpenPlay: 'isOpenPlay',
                isOpenSongster: 'isOpenSongster',
                songListState: 'songListState'
            }),
            ...mapState('song', {
                song: 'song',
                audio: 'audio',
                songIndex: 'songIndex',
                songList: 'songList',
                playType: 'playType'
            }),
            isShowBottom() {
                return Object.keys(this.song).length ? true : false
            }
        },
        methods: {
            /**
             * @description: 改变组件
             * @param {type} 
             * @return: 
             */            
            handleChangeComp(v) {
                this.comp = v
            }
        },
    }
</script>

<style lang="scss" scoped>
.fd-home {
    height: 100%;
    position: relative;
}
.fd-content{
   width: 100%;
   height: calc(100% - #{$headerHeight});
   overflow: hidden;
}
</style>