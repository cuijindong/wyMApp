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
            <listy :gqList="tjgqList"></listy>
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
                tjgdList: [],
                // 推荐歌曲list
                tjgqList: []
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
                this.getTjgq()
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
            },
            /**
             * @description: 获取推荐单曲list
             * @param {type} 
             * @return: 
             */ 
            getTjgq() {
                this.search('民谣', 1, 12).then(response => {
                    if (response.code === 200) {
                        this.tjgqList = response.result.songs
                        this.addGqpl(this.tjgqList)
                        this.addGqxq(this.tjgqList)
                    }
                })
            },
            /**
             * @description: 添加歌曲评论
             * @param {type} 
             * @return: 
             */ 
            addGqpl(list) {
                let requireList = []
                list.forEach(v => {
                    requireList.push(this.$http.commentMusic({id: v.id, limit: 1}))
                })
                Promise.all(requireList).then(res => {
                    res.forEach((v, i) => {
                        this.tjgqList[i].comment = v
                    })
                })
            },
            /**
             * @description: 添加歌曲详情
             * @param {type} 
             * @return: 
             */ 
            addGqxq(list) {
                let ids = []
                list.forEach(v => {
                    ids.push(v.id)                       
                })
                this.$http.songDetail({ids: ids.join(',')}).then(res => {
                    res.songs.forEach((v, i) => {
                        this.tjgqList[i].songs = v
                    })
                })
            },
            /**
             * @description: 搜索
             * @param {type} 
             * @return: 
             */ 
            search(keywords, type, limit = 12) {
                let option = {
                    keywords: keywords,
                    type: type,
                    limit: limit
                }
                return this.$http.search(option)
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