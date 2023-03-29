<template>
  <div class="menu-wrap">
    <!-- 二级菜单 -->
    <el-menu :default-active="defaultActive" :router="router" v-bind="$attrs" class="el-menu-vertical-demo">
      <template v-for="item in data" :key="item[alias.index || 'index']">
        <el-menu-item v-if="!item?.children?.length" :index="item[alias.index || 'index']">
          <el-icon>
            <component :is="item[alias.icon || 'icon']"></component>
          </el-icon>
          <span>{{ item[alias.name || 'name'] }}</span>
        </el-menu-item>
        <el-sub-menu v-if="item?.children?.length" :index="item[alias.index || 'index']">
          <template #title>
            <el-icon>
              <component :is="item[alias.icon || 'icon']"></component>
            </el-icon>
            <span>{{ item[alias.name || 'name'] }}</span>
          </template>
          <template v-for="item1 in item[alias.children || 'children']" :key="item1[alias.index || 'index']">
            <el-menu-item :index="item1[alias.index || 'index']">
              <el-icon>
                <component :is="item1[alias.icon || 'icon']"></component>
              </el-icon>
              <span>{{ item1[alias.name || 'name'] }}</span>
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang='ts'>
import { PropType } from 'vue';
import { dataProps } from './types'
const props = defineProps({
  data: {
    type: Array as PropType<any[]>,
    require: true,
  },
  defaultActive: {
    type: String,
    default: ''
  },
  router: {
    type: Boolean,
    default: false,
  },
  // 数据别名配置
  alias: {
    type: Object as PropType<dataProps>,
    default: () => ({
      name: 'name',
      icon: 'icon',
      index: 'index',
      children: 'children'
    }),
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