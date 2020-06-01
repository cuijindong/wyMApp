<!--
 * @Author: cjd
 * @Date: 2020-05-11 22:12:20
 -->
<template>
    <div class="fd-home">
        <home-header @changeComp="handleChangeComp"></home-header>
        <div class="fd-content" :style="`height: calc(100% - ${Object.keys(song).length ? '200px' : '100px'})`">
            <keep-alive>
                <component :is="comp"></component>
            </keep-alive>
        </div>
        <div class="fd-bottom" v-if="Object.keys(song).length">
            <home-bottom></home-bottom>
        </div>
    </div>
</template>

<script>
import homeHeader from '@/views/homeHeader.vue'
import homeBottom from '@/views/homeBottom.vue'
import my from '@/views/my'
import found from '@/views/found'
import clouds from '@/views/clouds'
import videoapp from '@/views/videoapp'
import { mapState, mapMutations, mapActions } from 'vuex'
    export default {
        components: {
            homeHeader,
            homeBottom,
            my,             // 我的
            found,          // 发现
            clouds,         // 云村
            videoapp,          // 视频
        },
        data() {
            return {
                comp: 'found',
                song: {0:0}
            }
        },
        computed: {
            ...mapState({
                userInfo: 'userInfo'
            })
        },
        mounted () {
            this.changeUserInfo({name: 454545}).then(() => {
                console.log(this.userInfo)
            })
        },
        methods: {
            ...mapMutations({
                setUserInfo: 'SET_USER_INFO'
            }),
            ...mapActions({
                changeUserInfo: 'changeUserInfo'
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
</style>