<template>
  <m-choose-time @time-change="chooseTime" :startOptions="startOptions" :endOptions="endOptions"></m-choose-time>
  <m-choose-date 
    style="margin-top: 10px;"
    :disableToday="false"
    @date-change="handleDate"
    :startDateOptions="startDateOptions"
    :endDateOptions="endDateOptions"
    ></m-choose-date>
</template>

<script setup lang="ts">
const startOptions = {
  disabled: false
};

const endOptions = {
  disabled: false
};

const startDateOptions = {
  // valueFormat: 'YYYY/MM/DD'
};
const endDateOptions = {
  // valueFormat: 'YYYY/MM/DD'
};
const chooseTime = (time: {startTime: string, endTime: string}) => {
  console.log('时间选择', time)
}
const handleDate = (date: {startTime: string, endTime: string}) => {
  console.log('获取日期', date);
};
</script>