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
        data: method === 'post' ? qs.stringify(data) : {},
        params: method === 'get' ? data : {},
        method: method,
    }
    let instance = axios.create({
        baseURL: baseUrl,
    })
    return instance(option).then(response => {
        if (response.status === 200) {
            return response.data
        }
    })
}

/**
 * 请求拦截器
 */
axios.interceptors.request.use((config) => {
    let token = window.localStorage.getItem('accessToken')
    if (token) {
        config.headers.accessToken = token
        return config
    }
}, (err) => {
    return Promise.reject(err)
})

export {
    http
}