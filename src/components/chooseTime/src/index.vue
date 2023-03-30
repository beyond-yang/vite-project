<template>
  <div class="m-select-time">
    <el-time-select
      style="margin-right: 10px;"
      v-model="startTime"
      :max-time="endTime"
      class="mr-4"
      :placeholder="startPlaceholder"
      :start="startTimeStart"
      :step="startTimeStep"
      :end="startTimeEnd"
      v-bind="$attrs.startOptions"
    />
    <el-time-select
      v-model="endTime"
      :min-time="startTime"
      :placeholder="endPlaceholder"
      :start="endTimeStart"
      :step="endTimeStep"
      :end="endTimeEnd"
      v-bind="$attrs.endOptions"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const props = defineProps({
  startTime: {
    type: String,
    default: ''
  },
  startPlaceholder: {
    type: String,
    default: '开始时间'
  },
  startTimeStart: {
    type: String,
    default: '08:30'
  },
  startTimeStep: {
    type: String,
    default: '00:15'
  },
  startTimeEnd: {
    type: String,
    default: '18:30'
  },
  endTime: {
    type: String,
    default: ''
  },
  endPlaceholder: {
    type: String,
    default: '结束时间'
  },
  endTimeStart: {
    type: String,
    default: '08:30'
  },
  endTimeStep: {
    type: String,
    default: '00:15'
  },
  endTimeEnd: {
    type: String,
    default: '18:30'
  },
});
const emit = defineEmits(['time-change']);

const startTime = ref(props.startTime);
const endTime = ref(props.endTime);

watch(() => [startTime.value, endTime.value], ([newStartTime, newEndTime]) => {
  emit('time-change', {
    startTime: newStartTime,
    endTime: newEndTime
  });
});

</script>