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
    // 新碟
    newAlbum: (data) => http('get', '/album/newest', data),
    // 推荐新歌
    personalizedNewsong: (data) => http('get', '/personalized/newsong', data),
    // 排行榜(热歌风向标)
    rank: (data) => http('get', '/top/list', data),
    // 获取音乐url
    songUrl: (data) => http('get', '/song/url', data),
    // 获取歌词
    lyric: (data) => http('get', '/lyric', data),
    // 热搜榜
    searchHot: (data) => http('get', '/search/hot/detail', data),
    // 搜索建议
    suggest: (data) => http('get', '/search/suggest', data),
    // 手机登录
    cellphone: (data) => http('get', '/login/cellphone', data),
    // 登陆状态
    status: (data) => http('get', '/login/status', data),
    // 退出登录
    logout: (data) => http('get', '/logout', data),
    // 推荐歌曲
    recommendSongs: (data) => http('get', '/recommend/songs', data),
    // 获取歌单详情
    songsterDetail: (data) => http('get', '/playlist/detail', data),


}