<!--
 * @Author: cjd
 * @Date: 2020-05-11 22:12:20
 -->
<template>
    <div class="fd-home">
        <home-header @changeComp="handleChangeComp"></home-header>
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
    export default {
        components: {
            homeHeader,
            my,             // 我的
            found,          // 发现
            clouds,         // 云村
            videoapp,          // 视频
        },
        data() {
            return {
                comp: 'found'
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
}
.fd-content{
   width: 100%;
   height: calc(100% - 200px);
   overflow: auto;
}
</style>