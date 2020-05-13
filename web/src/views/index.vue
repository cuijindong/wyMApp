<!--
 * @Author: cjd
 * @Date: 2020-05-11 22:12:20
 -->
<template>
    <div class="fd-home">
        <div class="fd-header">
            <div>1111</div>
            <div class="test">
                <menus :tabs="tabs" @getValue="getValue" active="2"></menus>
            </div>
            <div>1111</div>
        </div>
    </div>
</template>

<script>
import menus from 'components/appMenu.vue'
    export default {
        components: {
            menus,
        },
        data() {
            return {
                tabs: [{name: '我的', value: '1'}, {name: '发现', value: '2'}, {name: '云村', value: '3'}, {name: '视频', value: '4'}]
            }
        },
        methods: {
            getValue(v) {
                console.log(v)
            }
        },
    }
</script>

<style lang="scss" scoped>
.test{
    height: 100px;
    width: 70%;
}
.fd-header{
    display: flex;
}
</style>