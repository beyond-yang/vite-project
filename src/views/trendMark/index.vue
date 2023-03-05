<template>
  <div class="trend-wrap">
    <trendMark text="销售额" :reserveColor="true" upIcon="CaretTop"></trendMark>
    <trendMark text="个人业绩" type="down" :reserveColor="true" downIcon="CaretBottom"></trendMark>
  </div>
  <div></div>
</template>

<script setup lang='ts'>

</script>

<style lang='scss' scoped>
 .trend-wrap {
  display: flex;
 }
</style>