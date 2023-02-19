<template>
  <el-container>
    <el-aside width="auto">
      <navAside :collapse="isCollapse"></navAside>
    </el-aside>
    <el-container>
      <el-header>
        <navHeader v-model:collapse="isCollapse"></navHeader>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import navAside from '@/components/container/src/navSide/index.vue';
import navHeader from '@/components/container/src/navHeader/index.vue';
const isCollapse = ref(false);

</script>
<style lang='scss' scoped>
.el-container {
  height: 100%;
}
</style>