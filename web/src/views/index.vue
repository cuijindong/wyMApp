<!--
 * @Author: cjd
 * @Date: 2020-05-11 22:12:20
 -->
<template>
    <div class="fd-home">
        <home-header @changeComp="handleChangeComp"></home-header>
        <div class="fd-content" :class="{'fd-noBottom': !isShowBottom}">
            <keep-alive>
                <component :is="comp"></component>
            </keep-alive>
        </div>
        <div class="fd-bottom" v-if="isShowBottom">
            <home-bottom></home-bottom>
        </div>
        <play-page v-if="isOpenPlay"></play-page>
        <audio ref="audio" :src="song.urlInfo ? song.urlInfo[0].url : ''" autoplay="autoplay"></audio>
    </div>
</template>

<script>
import homeHeader from '@/views/homeHeader.vue'
import homeBottom from '@/views/homeBottom.vue'
import my from '@/views/my'
import found from '@/views/found'
import clouds from '@/views/clouds'
import videoapp from '@/views/videoapp'
import playPage from '@/views/playPage'
import { mapState, mapMutations } from 'vuex'
    export default {
        components: {
            homeHeader,
            homeBottom,
            my,             // 我的
            found,          // 发现
            clouds,         // 云村
            videoapp,          // 视频
            playPage,       // 播放页
        },
        data() {
            return {
                comp: 'found',
            }
        },
        computed: {
            ...mapState({
                isOpenPlay: 'isOpenPlay'
            }),
            ...mapState('song', {
                song: 'song',
            }),
            isShowBottom() {
                return Object.keys(this.song).length ? true : false
            }
        },
        mounted () {
            this.setAudio(this.$refs.audio)
        },
        methods: {
            ...mapMutations('song', {
                setAudio: 'SET_AUDIO'
            }),
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
}
.fd-content{
   width: 100%;
   height: calc(100% - 200px);
   overflow: auto;
}
.fd-noBottom{
   height: calc(100% - 100px);
}
</style>