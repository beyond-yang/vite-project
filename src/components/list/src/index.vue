<template>
  <el-tabs v-model="activeName">
    <el-tab-pane :label="item.title" :name="item.id" :key="index" v-for="(item, index) in list">
      <el-scrollbar height="200px">
        <div class="container" v-for="(item1, index1) in item.content" :key="index1" @click="clickItem(item1, index1)">
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
        <ul class="actions">
          <li v-for="(action, index2) in actions" :key="action.text" class="a-item" @click="clickAction(action, index2)">
            <span class="a-icon">
              <el-icon>
                <component :is="action.icon"></component>
              </el-icon>
            </span>
            <span class="a-text">{{ action.text }}</span>
          </li>
        </ul>
      </el-scrollbar>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang='ts'>
import { PropType, ref } from 'vue'
import { ListOptions, ActionOptions, ListItem } from './types'
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
const emit = defineEmits(['item-click', 'action-click']);

const activeName = ref('11')
const clickItem = (item: ListItem, index: number) => {
  emit('item-click', {item, index});
};

const clickAction = (item: ActionOptions, index: number) => {
  emit('action-click', {item, index});
};
</script>

<style lang='scss' scoped>
.container {
  .avatar {
    width: 30px;
    height: 30px;
    background-size: 100%;
  }
}

.actions {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  .a-item {
    display: flex;
    align-items: center;
    list-style: none;
  }
}
</style>