/*
 * @Author: cjd
 * @Date: 2020-05-20 23:05:55
 */ 
import { http } from './http.js'
export default {
    // 轮播图
    banner: (data) => http('post', '/banner', data),
    // 推荐歌单
    tjgd: (data) => http('post', '/personalized', data)
}