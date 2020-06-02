<!--
 * @Author: cjd
 * @Date: 2020-06-02 22:31:20
--> 
<template>
    <div class="fd-bottom">
        <div class="fd-bar"></div>
        <div class="fd-menu">
            <button @click.stop="onPlay">play</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
    export default {
        computed: {
            ...mapState('song', {
                audio: 'audio',
            })
        },
        methods: {
            ...mapMutations('song', {
                setAudio: 'SET_AUDIO'
            }),
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

</style>