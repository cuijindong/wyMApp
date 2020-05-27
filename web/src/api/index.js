/*
 * @Author: cjd
 * @Date: 2020-05-20 23:05:55
 */ 
import { http } from './http.js'
export default {
    // 轮播图
    banner: (data) => http('post', '/banner', data),
    // 热门歌单分类
    gdflHot: (data) => http('get', '/playlist/hot', data),
    // 精品歌单
    jpgd: (data) => http('get', '/top/playlist/highquality', data),
    // 精选歌单
    jxgd: (data) => http('get', '/top/playlist', data),
    // 推荐歌单
    tjgd: (data) => http('post', '/personalized', data),
    // 搜索
    search: (data) => http('get', '/search', data),
    // 歌曲详情
    songDetail: (data) => http('get', '/song/detail', data),
    // 歌曲评论
    commentMusic: (data) => http('get', '/comment/music', data),
    // 歌曲评论
    commentAlbum: (data) => http('get', '/comment/album', data),
    // 新歌
    newSong: (data) => http('get', '/top/song', data),
    // 新碟（最新专辑）
    newAlbum: (data) => http('get', '/album/newest', data),
}