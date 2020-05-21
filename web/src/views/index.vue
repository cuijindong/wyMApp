<!--
 * @Author: cjd
 * @Date: 2020-05-11 22:12:20
 -->
<template>
    <div class="fd-home">
        <home-header @changeComp="handleChangeComp"></home-header>
        <div class="fd-content">
            <component :is="comp"></component>
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
.fd-content{
    font-size: 20px;
}
</style>