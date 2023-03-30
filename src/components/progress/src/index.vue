<template>
  <div class="m-progress">
    <el-progress :percentage="percentageVal" v-bind="$attrs" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const props = defineProps({
  // 百分比
  percentage: {
    type: Number,
    default: 0,
    require: true
  },
  // 是否要动画
  animation: {
    type: Boolean,
    default: false
  },
  // 动画时长
  time: {
    type: Number,
    default: 3
  }
});

const emit = defineEmits(['progress-complete']);

// 使用定时器，动态的改变进度条的百分比
let percentageVal = ref(0);

onMounted(() => {
  const time = props.time * 1000 / props.percentage
  const timer = setInterval(() => {
    percentageVal.value += 1;
    if (!props.animation ||  percentageVal.value >= props.percentage) {
      percentageVal.value = props.percentage;
      emit('progress-complete');
      clearInterval(timer);
    }
  }, time);
});

</script>