<template>
  <div class="trend-mark">
    <div class="text">
      <slot v-if="slot.default"></slot>
      <span v-else>{{ text }}</span>
    </div>
    <div class="icon">
      <el-icon v-if="type === 'up'" :style="{ color: reserveColor ? '#e96f6f': upIconColor }">
        <ArrowUp />
      </el-icon>
      <el-icon v-else :style="{ color: reserveColor ? '#7cde9e' : downIconColor }">
        <ArrowDown />
      </el-icon>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useSlots } from 'vue';
let props = defineProps({
  // 标记类型 上升up 下降 down
  type: {
    type: String,
    default: 'up'
  },
  // 趋势显示的问题 1. 文字 2. 插槽
  text: {
    type: String,
    default: '文字'
  },
  // 上升图标的颜色
  upIconColor: {
    type: String,
    default: '#7cde9e'
  },
  // 下降图标的颜色
  downIconColor: {
    type: String,
    default: '#e96f6f'
  },
  // 颜色翻转
  reserveColor: {
    type: Boolean,
    default: false
  }
});

let slot = useSlots();

</script>

<style lang='scss' scoped>
.trend-mark {
  display: flex;
  align-items: center;
  margin-right: 10px;

  .text {
    margin-right: 4px;
  }
}</style>