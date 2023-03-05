<template>
  <div class="trend-mark">
    <div class="text" :style="{ color: textColor }">
      <slot v-if="slot.default"></slot>
      <span v-else>{{ text }}</span>
    </div>
    <div class="icon">
      <el-icon>
        <component :is="upIcon" v-if="type === 'up'" :style="{ color: reserveColor ? '#e96f6f': upIconColor }"></component>
        <component :is="downIcon" v-else :style="{ color: reserveColor ? '#7cde9e' : downIconColor }"></component>
      </el-icon>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useSlots, computed } from 'vue';
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
  },
  // up 文字颜色
  upTextColor: {
    type: String,
    default: '#3cc768'
  },
  // down 文字颜色
  downTextColor: {
    type: String,
    default: '#c73cb6'
  },
  // up 图标
  upIcon: {
    type: String,
    default: 'ArrowUp'
  },
  // up 图标
  downIcon: {
    type: String,
    default: 'ArrowDown'
  }
});

let slot = useSlots();

const textColor = computed(() => {
  return props.type === 'up' ? props.upTextColor : props.downTextColor
});

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