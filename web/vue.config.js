/*
 * @Author: cjd
 * @Date: 2020-05-11 22:14:37
 */
const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // 路径别名
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('components', resolve('src/components'))
            .set('assets', resolve('src/assets'))
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