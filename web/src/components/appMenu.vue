<!--
 * @Author: cjd
 * @Date: 2020-05-13 22:23:31
 -->
<template>
    <div class="fd-menu">
        <div class="fd-left">
            <van-icon name="wap-nav" />
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
            <van-icon name="search" />
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
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
    color: #7c7c7c;
    .fd-left{
        font-size: 35px;
        display: flex;
    }
    .fd-center{
        width: 75%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .fd-tab-item{
            height: 100%;
            width: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: #fff;
            transform:scale(1, 1);
            transition: background-color, transform .3s;
            &:active{
                background-color: #ececec;
            }
        }
    }
    .fd-right{
        font-size: 35px;
        display: flex;
        background-color: #fff;
        border-radius: 50%;
        transition: background-color .5s;
        &:active{
            background-color: #ececec;
        }
    }
}
.fd-active{
    transform:scale(1.2, 1.2) !important;
    font-weight: bolder;
    color: #1b1b1b;
}
</style>