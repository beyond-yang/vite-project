<template>
  <div class="menu-wrap">
    <!-- 二级菜单 -->
    <el-menu :default-active="defaultActive" :router="router" v-bind="$attrs" class="el-menu-vertical-demo">
      <template v-for="item in data" :key="item.index">
        <el-menu-item v-if="!item?.children?.length" :index="item.index">
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{ item.name }}</span>
        </el-menu-item>
        <el-sub-menu v-if="item?.children?.length" :index="item.index">
          <template #title>
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="item1 in item.children" :key="item1.index">
            <el-menu-item :index="item1.index">
              <el-icon>
                <component :is="item1.icon"></component>
              </el-icon>
              <span>{{ item1.name }}</span>
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang='ts'>
import { PropType } from 'vue';
import { menuItem } from './types'
const props = defineProps({
  data: {
    type: Array as PropType<menuItem[]>,
    require: true,
  },
  defaultActive: {
    type: String,
    default: ''
  },
  router: {
    type: Boolean,
    default: false,
  }
});
console.log(props.data);

</script>

<style lang='scss' scoped>
.menu-wrap {
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
</style>