<!--
 * @Author: cjd
 * @Date: 2020-05-20 21:15:42
--> 
<template>
    <div class="fd-found">
        <banner></banner>
        <div class="fd-content">
            <menu-tab></menu-tab>
            <!-- 精选歌单 -->
            <listx :gdList="jxgdList" :title="'懂你的精选歌单'"></listx>
            <!-- 推荐华语歌 -->
            <listy :gqList="tjgqList"></listy>
            <!-- 精品歌单 -->
            <listx :gdList="jpgdList" :title="'官方精品歌单'"></listx>
            <!-- 新歌新碟 -->
            <new-song :xgList="tjxgList" :xdList="tjxdList"></new-song>
        </div>
    </div>
</template>

<script>
import banner from "./banner.vue"
import menuTab from './menuTab.vue'
import listx from './listx.vue'
import listy from './listy.vue'
import newSong from './newSong'
    export default {
        components: {
            banner,
            menuTab,
            listx,
            listy,
            newSong
        },
        data() {
            return {
                // 推荐精选歌单list
                jxgdList: [],
                // 推荐歌曲list
                tjgqList: [],
                // 推荐精品歌单list
                jpgdList: [],
                // 推荐新歌list
                tjxgList: [],
                // 推荐新碟list
                tjxdList: []
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
                this.getJxgd()
                this.getTjgq()
                this.getJpgd()
                this.getXgXd()
            },
            /**
             * @description: 获取精品歌单list
             * @param {type} 
             * @return: 
             */
            getXgXd() {
                this.$http.newSong({type: 7}).then(response => {
                    if (response.code === 200) {
                        this.tjxgList = response.data.slice(0, 6)
                        this.addGqpl(this.tjxgList)
                    }
                })
                this.$http.newAlbum().then(response => {
                    if (response.code === 200) {
                        this.tjxdList = response.albums.slice(0, 6)
                        this.addZjpl(this.tjxdList)
                    }
                })
            },
            /**
             * @description: 获取精品歌单list
             * @param {type} 
             * @return: 
             */            
            getJpgd() {
                this.$http.gdflHot().then(res => {
                    let tags = res.tags
                    this.$http.jpgd({limit: 6, cat: tags[0].name}).then(response => {
                        if (response.code === 200) {
                            this.jpgdList = response.playlists
                        }
                    })
                })
            },
            /**
             * @description: 获取精选歌单list
             * @param {type} 
             * @return: 
             */            
            getJxgd() {
                this.$http.gdflHot().then(res => {
                    let tags = res.tags
                    this.$http.jxgd({limit: 6, cat: tags[0].name}).then(response => {
                        if (response.code === 200) {
                            this.jxgdList = response.playlists
                        }
                    })
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
             * @description: 添加专辑评论
             * @param {type} 
             * @return: 
             */ 
            addZjpl(list) {
                let requireList = []
                list.forEach(v => {
                    requireList.push(this.$http.commentAlbum({id: v.id, limit: 1}))
                })
                Promise.all(requireList).then(res => {
                    res.forEach((v, i) => {
                        this.$set(list[i], 'comment', v)
                    })
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
                        this.$set(list[i], 'comment', v)
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
                        this.$set(this.tjgqList[i], 'songs', v)
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