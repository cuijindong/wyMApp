<!--
 * @Author: cjd
 * @Date: 2020-06-02 22:31:20
--> 
<template>
    <div class="fd-bottom">
        <div class="fd-bar">
            <div class="fd-left">{{currentTime_t}}</div>
            <div class="fd-center">
                <van-slider 
                    v-model="currentTime"
                    @drag-start="dragStart"
                    @drag-end="dragEnd"
                    @change="onChange"
                    :max="duration"
                    bar-height="1px"
                    active-color="#6c6f76"
                    inactive-color="#2c2f36"
                    button-size="10px"
                />
            </div>
            <div class="fd-right">{{duration_t}}</div>
        </div>
        <div class="fd-menu">
            <div class="fd-left" @click="$coment.changePlayType(true)">
                <i class="iconfont" v-show="playType === 0">&#xe64c;</i>
                <i class="iconfont" v-show="playType === 1">&#xe64b;</i>
                <i class="iconfont" v-show="playType === 2">&#xe64d;</i>
            </div>
            <div class="fd-content">
                <div>
                    <i class="iconfont" @click="defore">&#xe649;</i>
                </div>
                <div class="fd-play">
                    <i class="iconfont" @click.stop="onPlay">{{audio.paused ? '&#xe647;' : '&#xe64a;'}}</i>
                </div>
                <div>
                    <i class="iconfont" @click="last">&#xe648;</i>
                </div>
            </div>
            <div class="fd-right">
                <i class="iconfont" @click="openSongList">&#xe61f;</i>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
    export default {
        data() {
            return {
                currentTime: 0,     // 当前播放进度（秒）
                duration: 0,        // 音频总长度(秒)
                dragFlag: false,    // 是否拖动进度条
            }
        },
        inject: ['audioInfo'],
        watch: {
            audioInfo: {
                handler(newValue) {
                    if (!this.dragFlag) {
                        this.currentTime = parseFloat(newValue.currentTime)
                        this.duration = parseFloat(newValue.duration)
                    }
                },
                deep: true
            }
        },
        computed: {
            ...mapState('song', {
                audio: 'audio',
                songIndex: 'songIndex',
                songList: 'songList',
                playType: 'playType'
            }),
            // 音频总长度(分:秒)
            duration_t() {
                return this.$coment.changeNumToTime(this.duration, 1)
            },
            // 当前播放进度(分:秒)
            currentTime_t() {
                return this.$coment.changeNumToTime(this.currentTime, 1)
            }
        },
        methods: {
            ...mapMutations('song', {
                setAudio: 'SET_AUDIO'   // 设置播放音频
            }),
            ...mapMutations({
                setSongListState: 'SET_SONG_LIST_STATE'
            }),
            /**
            * 打开播放列表弹窗
            */
            openSongList() {
                this.setSongListState(true)
            },
            /**
             * @description: 切歌（上一首）
             * @param {type} 
             * @return: 
             */
            defore() {
                if(this.songIndex > 0) {
                    this.$coment.changeSong(this.songList[this.songIndex - 1], this.songIndex - 1)
                } else {
                    let type = true
                    if (type) {
                        this.$coment.changeSong(this.songList[this.songList.length - 1], this.songList.length - 1)
                    }
                }
            },
            /**
             * @description: 切歌（下一首）
             * @param {type} 
             * @return: 
             */
            last() {
                if(this.songIndex < this.songList.length - 1) {
                    this.$coment.changeSong(this.songList[this.songIndex + 1], this.songIndex + 1)
                } else {
                    let type = true
                    if (type) {
                        this.$coment.changeSong(this.songList[0], 0)
                    }
                }
            },
            /**
             * @description: 滑动拖动（1.值变化2.结束拖动）
             * @param {type} 
             * @return: 
             */
            onChange(currentTime) {
                this.audio.currentTime = currentTime
            },
            /**
             * @description: 滑动拖动（开始）
             * @param {type} 
             * @return: 
             */
            dragStart() {
                this.dragFlag = true
            },
            /**
             * @description: 滑动拖动（结束）
             * @param {type} 
             * @return: 
             */
            dragEnd() {
                this.dragFlag = false
            },
            /**
             * @description: 暂停/播放
             * @param {type} 
             * @return: 
             */            
            onPlay() {
                if (this.audio.paused) {
                    this.audio.play()
                } else {
                    this.audio.pause()
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.fd-bottom{
    height: 100%;
    overflow: hidden;
}
.fd-bar{
    display: flex;
    height: 70px;
    align-items: center;
    .fd-left{
        padding-right: 30px;
        font-size: 20px;
        color: #a0a3aa;
    }
    .fd-center{
        flex-grow: 1;
        display: flex;
        align-items: center;
    }
    .fd-right{
        font-size: 20px;
        color: #414141;
        padding-left: 30px;
    }
}
.fd-menu{
    display: flex;
    height: calc(100% - 70px);
    align-items: center;
    color: #c9ccd1;
    .fd-left{
        padding: 0 20px;
    }
    .fd-content {
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        .fd-play{
            padding: 0 80px;
            .iconfont{
                font-size: 100px;
                font-weight: 100;
            }
        }
    }
    .fd-right {
        padding: 0 20px;
        .iconfont{
            font-size: 50px;
        }
    }
    .iconfont{
        font-size: 60px;
    }
}
</style>