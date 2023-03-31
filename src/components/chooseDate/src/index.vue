<template>
  <div class="m-choose-date">
    <el-date-picker
        v-model="startDate"
        type="date"
        :placeholder="startPlaceholder"
        :disabled-date="startDisabledDataFun"
        v-bind="$attrs.startDateOptions"
        style="margin-right: 10px;"
      />
      <el-date-picker
        v-model="endDate"
        type="date"
        :placeholder="endPlaceholder"
        :disabled-date="endDisabledDataFun"
        v-bind="$attrs.endDateOptions"
      />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  // 是否禁用今天之前的日期
  disableToday: {
    type: Boolean,
    default: false
  },
  startPlaceholder: {
    type: String,
    default: '开始日期'
  },
  endPlaceholder: {
    type: String,
    default: '结束日期'
  }
});

const emit = defineEmits(['date-change']);
const startDate = ref<Date | null>(null)
const endDate = ref<Date | null>(null)

/**
 * 禁用开始日期的函数
 * @param time 
 */
const startDisabledDataFun = (time: Date) => {
  if (props.disableToday) {
    return time.getTime() < Date.now() - 1000 * 60 * 60 *24
  }
  if (endDate.value) {
    return time.getTime() > endDate.value.getTime() - 1000 * 60 * 60 *24;
  }
}

/**
 * 禁用结束日期的函数
 * @param time 
 */
 const endDisabledDataFun = (time: Date) => {
  if (props.disableToday) {
    return time.getTime() < Date.now() - 1000 * 60 * 60 *24;
  }
  if (startDate.value) {
    return time.getTime() < startDate.value.getTime() + 1000 * 60 * 60 *24;
  }
  
}
 
watch(() => [startDate.value, endDate.value], ([newStartTime, newEndTime]) => {
  emit('date-change', {
    startTime: newStartTime,
    endTime: newEndTime 
  });
});
</script>