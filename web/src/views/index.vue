<!--
 * @Author: cjd
 * @Date: 2020-05-11 22:12:20
 -->
<template>
    <div class="fd-home">
        <home-header></home-header>
    </div>
</template>

<script>
import homeHeader from '@/views/homeHeader.vue'
    export default {
        components: {
            homeHeader,
        }
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