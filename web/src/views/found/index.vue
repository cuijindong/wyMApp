<!--
 * @Author: cjd
 * @Date: 2020-05-20 21:15:42
--> 
<template>
    <div class="fd-found">
        <banner></banner>
        <div class="fd-content">
            <menu-tab></menu-tab>
            <listx :gdList="tjgdList"></listx>
            <listy></listy>
        </div>
    </div>
</template>

<script>
import banner from "./banner.vue"
import menuTab from './menuTab.vue'
import listx from './listx.vue'
import listy from './listy.vue'
    export default {
        components: {
            banner,
            menuTab,
            listx,
            listy
        },
        data() {
            return {
                // 推荐歌单list
                tjgdList: []
            }
        },
        created () {
            this.init()
        },
        mounted () {
            
        },
        methods: {
            /**
             * @description: 初始化
             * @param {type} 
             * @return: 
             */            
            init() {
                this.getTjgd()
            },
            /**
             * @description: 获取推荐歌单list
             * @param {type} 
             * @return: 
             */            
            getTjgd() {
                this.$http.tjgd({limit: 6}).then(response => {
                    if (response.code) {
                        this.tjgdList = response.result
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
.fd-found{
    width: 100%;
    .fd-content{
        padding: $PubPadding;
    }
}
</style>