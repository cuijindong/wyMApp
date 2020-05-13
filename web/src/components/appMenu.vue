<!--
import { throws } from 'assert';
import { throws } from 'assert';
import { throws } from 'assert';
 * @Author: cjd
 * @Date: 2020-05-13 22:23:31
 -->
<template>
    <div class="fd-tabbar">
        <div 
            class="fd-tab-item"
            :class="{'fd-active' : item.value === active}"
            :style="item.value === active ? `color:${activeColor}` : `color:${noActiveColor}`"
            v-for="(item, index) in tabs"
            :key="index"
            @click="handleTadActive(item)"
        >
        <span>{{item.name}}</span></div>
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
        methods: {
            /**
             * @description: tab点击，事件来抛出
             * @param {type} 
             * @return: 
             */
            handleTadActive(item) {
                this.active = item.value
                this.$emit('getValue', item.value)
                this.$emit('getItem', item)
            }
        },
    }
</script>

<style lang="scss" scoped>
.fd-tabbar{
    font-size: 0.4rem;
    display: flex;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: space-between;
    color: #7c7c7c;
    .fd-tab-item{
        height: 100%;
        display: flex;
        align-items: center;
        border-radius: 50%;
        background: url('../assets/img/appMenu/clickBg.png') no-repeat center;
        background-size: 0%;
        transition: background-size .3s;
        &:hover{
            background-size: 100%;
        }
        &:active{
            // background: #ececec;
            background-size: 100%;
        }
        span{
            padding: 0 20px;
        }
    }
}
.fd-active{
    font-size: 40px;
    font-weight: bolder;
    color: #1b1b1b;
    span{
        padding: 0 10px !important;
    }
}
</style>