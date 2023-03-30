<template>
  <m-choose-time @time-change="chooseTime" :startOptions="startOptions" :endOptions="endOptions"></m-choose-time>
</template>

<script setup lang="ts">
const startOptions = {
  disabled: false
};

const endOptions = {
  disabled: false
};
const chooseTime = (time: {startTime: string, endTime: string}) => {
  console.log('时间选择', time)
}
</script>