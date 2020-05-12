/*
 * @Author: cjd
 * @Date: 2020-05-11 22:14:37
 */
const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
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
        host: 'localhost',
        port: 8000,
        proxy: {
            '/api': {
                target: 'http://xxx.xxxx.xxx',
                pathReWrite: {
                    '^/api': ''
                }
            }
        }
    }
}