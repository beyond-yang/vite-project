<template>
  <el-container>
      <el-aside width="auto">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :collapse="isCollapse">
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <location />
              </el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group>
              <template #title><span>Group One</span></template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title><span>item four</span></template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <template #title>Navigator Two</template>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon>
              <document />
            </el-icon>
            <template #title>Navigator Three</template>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon>
              <setting />
            </el-icon>
            <template #title>Navigator Four</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-icon v-if="isCollapse" style="cursor: pointer;" @click="isCollapse = !isCollapse"><Expand /></el-icon>
          <el-icon v-if="!isCollapse" style="cursor: pointer;" @click="isCollapse = !isCollapse"><Fold /></el-icon>
        </el-header>
        <el-main><el-icon><Plus /></el-icon></el-main>
      </el-container>
    </el-container>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
const isCollapse = ref(false);

</script>
<style lang='scss' scoped>
.el-container {
  height: 100%;
}
.el-menu {
  background-color: #d9ecff;
}
.el-header {
  background-color: #c6e2ff;
}
.el-main {
  background-color: #ecf5ff;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>