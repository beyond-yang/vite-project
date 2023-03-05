<template>
  <el-tabs v-model="activeName">
    <el-tab-pane :label="item.title" :name="item.id" :key="index" v-for="(item, index) in list">
      <div class="container" v-for="(item1, index1) in item.content" :key="index1">
        <img v-if="item1.avatar" :src="item1.avatar" alt="" class="avatar">
        <div class="content">
          <div class="title" v-if="item1.title">
            <span>{{ item1.title }}</span>
            <el-tag v-if="item1?.tag" :type="item1?.tagType">{{ item1?.tag }}</el-tag>
          </div>
          <div v-if="item1.desc">{{ item1.desc }}</div>
          <div v-if="item1.time">{{ item1.time }}</div>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang='ts'>
import { PropType, ref } from 'vue'
import { ListOptions, ActionOptions } from './types' 
const props = defineProps({
  // 列表内容
  list: {
    type: Array as PropType<ListOptions[]>,
    require: true,
  },
  // 操作按钮内容
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => []
  }
});

const activeName = ref('11')
</script>

<style lang='scss' scoped>
.container {
 .avatar {
  width: 30px;
  height: 30px;
  background-size: 100%;
 } 
}
</style>