<!--
 * @Author: cjd
 * @Date: 2020-05-24 17:26:11
--> 
<template>
    <div class="fd-tap">
        <div class="fd-tap-item">
            <div class="fd-icon"><i class="iconfont fd-icon-item">&#xe601;</i></div>
            <div class="fd-label">每日推荐</div>
        </div>
        <div class="fd-tap-item">
            <div class="fd-icon"><i class="iconfont fd-icon-item">&#xe637;</i></div>
            <div class="fd-label">歌单</div>
        </div>
        <div class="fd-tap-item">
            <div class="fd-icon"><i class="iconfont fd-icon-item">&#xe6c5;</i></div>
            <div class="fd-label">排行榜</div>
        </div>
        <div class="fd-tap-item">
            <div class="fd-icon"><i class="iconfont fd-icon-item">&#xe636;</i></div>
            <div class="fd-label">电台</div>
        </div>
        <div class="fd-tap-item">
            <div class="fd-icon"><i class="iconfont fd-icon-item">&#xe8c1;</i></div>
            <div class="fd-label">直播</div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.fd-tap{
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: $menuTabMargin;
    .fd-tap-item{
        display: flex;
        flex-direction: column;
        .fd-icon{
            height: 90px;
            width: 90px;
            border-radius: 50%;
            background-color: #ff5a4c;
            background-image: linear-gradient(to right, #ff5a4c , #ff1e12);
            margin-bottom: 10px;
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            .fd-icon-item{
                font-size: 45px;
            }
        }
        .fd-label{
            font-size: 23px;
        }
    }
}
</style>