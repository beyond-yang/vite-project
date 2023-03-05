<template>
  <el-menu
default-active="1"
class="el-menu-vertical-demo"
:collapse="collapse">
    <el-menu-item index="1">
      <el-icon><HomeFilled /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><Check /></el-icon>
      <template #title>图标选择器</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><Position /></el-icon>
      <template #title>省市区选择</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><Clock /></el-icon>
      <template #title>时间选择器</template>
    </el-menu-item>
    <el-menu-item index="5">
      <el-icon><Bell /></el-icon>
      <template #title>通知菜单</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang='ts'>
let props = defineProps<{
  collapse: boolean
}>();

</script>

<style lang='scss' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
</style>