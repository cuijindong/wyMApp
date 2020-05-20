/*
 * @Author: cjd
 * @Date: 2020-05-20 22:30:21
 */ 
import axios from 'axios'
import qs from 'qs'
const BaseUrl = require("./config");

function http (method, url, data) {
    let baseUrl = BaseUrl.ROOT
    let option = {
        url: url,
        data: qs.stringify(data),
        method: method
    }
    let instance = axios.create({
        baseURL: baseUrl
    })
    return instance(option)
}
export {
    http
}