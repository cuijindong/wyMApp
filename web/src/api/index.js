/*
 * @Author: cjd
 * @Date: 2020-05-20 23:05:55
 */ 
import { http } from './http.js'
export default {
    banner: http('get', '/banner')
}