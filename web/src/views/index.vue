<!--
 * @Author: cjd
 * @detaile: 首页
 * @Date: 2020-05-11 22:12:20
 -->
<template>
    <div class="fd-index">
        <div class="fd-content" :class="{'fd-noBottom' : !isShowBottom}">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <!-- 底部 -->
        <div class="fd-bottom" v-if="isShowBottom">
            <home-bottom></home-bottom>
        </div>
        <!-- 播放页（歌词、进度条等） -->
        <play-page v-if="isOpenPlay"></play-page>
        <!-- 歌单内容 -->
        <songster-page v-if="isOpenSongster"></songster-page>
        <!-- 播放列表 -->
        <song-list v-show="songListState"></song-list>
        <!-- 音频 -->
        <audio 
            ref="audio"
            :src="song.urlInfo ? song.urlInfo[0].url : ''"
            :loop="playType === 1"
            autoplay="autoplay">
        </audio>
    </div>
</template>

<script>
import homeBottom from '@/views/homeBottom.vue'
import playPage from '@/views/playPage'
import songList from './songList/index'
import songsterPage from './songsterPage/index'
import { mapState, mapMutations } from 'vuex'
    export default {
        components: {
            homeBottom,
            playPage,       // 播放页
            songList,       // 播放列表
            songsterPage,   // 歌单内容
        },
        data() {
            return {
                audioInfo: {
                    duration: 0,        // 当前音频总长度（秒）
                    currentTime: 0      // 播放进度（秒）
                }
            }
        },
        provide() {
            return {
                audioInfo: this.audioInfo
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
        mounted() {
            this.setAudio(this.$refs.audio)
            // 添加audio监听
            let that = this
            this.audio.addEventListener('timeupdate', function () {
                if (!isNaN(that.audio.duration)) {
                    that.audioInfo.duration = that.audio.duration
                    that.audioInfo.currentTime = that.audio.currentTime

                    if (that.audio.ended) {
                        // 处理切歌
                        that.handerChangeSong(that.playType)
                    }
                }
            }, false)
        },
        methods: {
            ...mapMutations('song', {
                setAudio: 'SET_AUDIO',
            }),
            /**
             * @description: 切歌
             * @param {Number} playType: 播放模式 1：列表循环，2：单曲循环，3：随机播放 
             * @return: 
             */ 
            handerChangeSong(playType) {
                let songListLength = this.songList.length

                if (playType === 0) {
                    if(this.songIndex < songListLength - 1) {
                        this.$coment.changeSong(this.songList[this.songIndex + 1], this.songIndex + 1)
                    } else {
                        this.$coment.changeSong(this.songList[0], 0)
                    }
                } else if (playType === 1) {
                    this.$coment.changeSong(this.songList[this.songIndex], this.songIndex)
                } else if (playType === 2) {
                    let index  = this.$coment.randomNum(0, songListLength - 1)
                    this.$coment.changeSong(this.songList[index], index)
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.fd-index {
    height: 100%;
    position: relative;
}
.fd-content{
   width: 100%;
   height: calc(100% - 100px);
   overflow: hidden;
}
.fd-noBottom{
   height: 100%;
}
</style>