<!--
 * @Author: cjd
 * @Date: 2020-05-18 21:37:00
--> 
<template>
  <div class="fd-header">
    <menus :tabs="tabs" @getValue="getValue" :active="active"></menus>
  </div>
</template>

<script>
import menus from "components/appMenu.vue";
export default {
  components: {
    menus
  },
  data() {
    return {
      tabs: [
        { name: "我的", value: "my" },
        { name: "发现", value: "found" },
        { name: "云村", value: "clouds" },
        { name: "视频", value: "videoapp" }
      ],
      active: 'found'
    };
  },
  methods: {
    /**
     * 菜单点击事件
     */
    getValue(v) {
      this.$emit('changeComp', v)
    }
  }
};
</script>

<style lang="scss" scoped>
.fd-header {
  height: 100px;
  width: 100%;
}
</style>