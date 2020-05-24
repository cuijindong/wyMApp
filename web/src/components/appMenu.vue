<!--
 * @Author: cjd
 * @Date: 2020-05-13 22:23:31
 -->
<template>
    <div class="fd-menu">
        <div class="fd-left">
            <span class="iconfont">&#xe613;</span>
        </div>
        <div class="fd-center">
            <div 
                class="fd-tab-item"
                :class="{'fd-active' : item.value === actived}"
                :style="item.value === actived ? `color:${activeColor}` : `color:${noActiveColor}`"
                v-for="(item, index) in tabs"
                :key="index"
                @click="handleTadActive(item)"
            >
            <span>{{item.name}}</span></div>
        </div>
        <div class="fd-right">
            <span class="iconfont">&#xe61c;</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            tabs: {
                type: Array,
                default: () => []
            },
            active: {
                type: String,
                default: ''
            },
            activeColor: {
                type: String,
                default: '#1b1b1b'
            },
            noActiveColor: {
                type: String,
                default: '#7c7c7c'
            }
        },
        watch: {
            /**
             * @description: 整个类型检测
             * @param {type} 
             * @return: 
             */            
            tabs(newValue) {
                if (!(newValue instanceof Array)) {
                    throw new Error('appMenu期待的tabs是一个数组')
                }
            }
        },
        data () {
            return {
                actived: this.active
            }
        },
        methods: {
            /**
             * @description: tab点击，事件来抛出
             * @param {type} 
             * @return: 
             */
            handleTadActive(item) {
                this.actived = item.value
                this.$emit('getValue', item.value)
                this.$emit('getItem', item)
            }
        },
    }
</script>

<style lang="scss" scoped>
.fd-menu{
    font-size: 30px;
    display: flex;
    width: 100%;
    height: 100px;
    padding: $PubPadding;
    align-items: center;
    justify-content: space-between;
    color: #7c7c7c;
    .fd-left{
        display: flex;
        span{
            font-size: 45px;
            color: #1b1b1b;
            font-weight: 600;
        }
    }
    .fd-center{
        width: 70%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .fd-tab-item{
            height: calc(100% - 20px);
            width: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transform:scale(1, 1);
            background-color: #ffffff;
            transition: background-color .3s, transform .3s;
            &:active{
                background-color: rgba(228, 228, 228, 0.53);
            }
        }
    }
    .fd-right{
        display: flex;
        transform:scale(1, 1);
        transition: transform .3s;
        span{
            font-size: 45px;
            color: #1b1b1b;
            font-weight: 500;
        }
        &:active{
            transform:scale(1.2, 1.2);
        }
    }
}
.fd-active{
    transform:scale(1.2, 1.2) !important;
    font-weight: bolder;
    color: #1b1b1b;
}
</style>