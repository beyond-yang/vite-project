<template>
  <div class="trend-mark">
    <div class="text">{{ text }}</div>
    <div class="icon">
      <el-icon v-if="type === 'up'" :style="{ color: upIconColor }">
        <ArrowUp />
      </el-icon>
      <el-icon v-else :style="{ color: downIconColor }">
        <ArrowDown />
      </el-icon>
    </div>
  </div>
</template>

<script setup lang='ts'>
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
  }
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