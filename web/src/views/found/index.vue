<!--
 * @Author: cjd
 * @Date: 2020-05-20 21:15:42
--> 
<template>
    <div class="fd-found fd-scroll" @scroll="handlerScroll">
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
            <!-- 热歌风向标 -->
            <rank :rankList="rankList"></rank>
            <!-- 刷新 -->
            <div class="fd-upData">
                <div class="fd-butt">
                    <i class="iconfont">&#xe644;</i>
                    <div>点击刷新</div>
                </div>
                <div class="fd-text">换一批内容</div>
            </div>
        </div>
    </div>
</template>

<script>
import banner from "./banner.vue"
import menuTab from './menuTab.vue'
import listx from './listx.vue'
import listy from './listy.vue'
import newSong from './newSong'
import rank from './rank'
import scrollMixin from '../../mixin/scrolMixinl'
    export default {
        components: {
            banner,
            menuTab,
            listx,
            listy,
            newSong,
            rank
        },
        mixins: [scrollMixin],
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
                tjxdList: [],
                // 热歌风向标
                rankList: []
            }
        },
        created () {
            this.init()
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
                this.getXgXd()
                this.getRank()
            },
            /**
             * @description: 获取热歌风向标list
             * @param {type} 
             * @return: 
             */
            getRank() {
                let flag = [0, 1, 2, 3]
                let requireList = []
                flag.forEach(v => {
                    requireList.push(this.$http.rank({idx: v}))
                })
                Promise.all(requireList).then(response => {
                    this.rankList = response
                })
            },
            /**
             * @description: 新歌/新碟
             * @param {type} 
             * @return: 
             */
            getXgXd() {
                this.$http.personalizedNewsong().then(response => {
                    if (response.code === 200) {
                        if(response.result.length >= 6) {
                            let songList = response.result.slice(0, 6)
                            this.tjxgList = songList.map(v => {
                                return v.song
                            })
                        }
                    }
                })
                this.$http.newAlbum().then(response => {
                    if (response.code === 200) {
                        this.tjxdList = response.albums.slice(0, 6)
                    }
                })
            },
            /**
             * @description: 获取 推荐/官方精选歌单list
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
                    this.$http.jpgd({limit: 6, cat: tags[0].name}).then(response => {
                        if (response.code === 200) {
                            this.jpgdList = response.playlists
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
                this.$http.recommendSongs().then(response => {
                    if (response.code === 200) {
                        if (response.recommend.length > 12) {
                            this.tjgqList = response.recommend.slice(0, 12)
                        }
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
    height: 100%;
    overflow-y: auto;
    .fd-content{
        padding: $PubPadding;
        .fd-upData{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            .fd-butt{
                display: flex;
                align-items: center;
                padding: 0 10px;
                color: #396896;
                .iconfont{
                    font-size: 25px;
                    font-weight: 600;
                }
            }
        }
        .fd-text{
            color: #939393;
        }
    }
}
</style>