<template>
  <div class="trend-wrap">
    <trendMark text="销售额" :reserveColor="true"></trendMark>
    <trendMark text="个人业绩" type="down" :reserveColor="true"></trendMark>
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