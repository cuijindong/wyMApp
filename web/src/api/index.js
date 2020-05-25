/*
 * @Author: cjd
 * @Date: 2020-05-20 23:05:55
 */ 
import { http } from './http.js'
export default {
    // 轮播图
    banner: (data) => http('post', '/banner', data),
    // 推荐歌单
    tjgd: (data) => http('post', '/personalized', data),
    // 搜索
    search: (data) => http('post', '/search', data),
    // 歌曲详情
    songDetail: (data) => http('get', '/song/detail', data),
    // 歌曲评论
    commentMusic: (data) => http('get', '/comment/music', data),
}