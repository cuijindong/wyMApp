/*
 * @Author: cjd
 * @Date: 2020-05-11 22:14:37
 */
const BaseUrl = require("./src/api/config");
const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "assets/css/public.scss";`
            }
        }
    },
    chainWebpack: config => {
        // 路径别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('components', resolve('src/components'))
            .set('assets', resolve('src/assets'))
        config.module
            .rule('scss')
            .oneOf('vue')
            .use('px2rem-loader')
            .loader('px2rem-loader')
            .before('postcss-loader') // this makes it work.
            .options({ remUnit: 75, remPrecision: 8 })
            .end()
    },   
    // 开发环境访问地址、代理等配置
    devServer: {
        host: '192.168.1.105',
        port: 8000,
        proxy: {
            [BaseUrl.ROOT]: {
                target: BaseUrl.URL,
                changeOrigin: true, // 跨域
                ws: true,
                pathRewrite: {
                    [`^${BaseUrl.ROOT}`]: ''
                }
            }
        }
    },
    configureWebpack: {
        externals: {
            "vue": 'Vue',
            "vuex": 'Vuex',
            "vue-router": 'VueRouter',
            "jquery": '$',
            "axios": 'axios',
            "vue-lazyload": "VueLazyload",
        }
    }
}