<template>
  <div>
    <chooseArea @change="changeArea"></chooseArea>
  </div>
</template>

<script setup lang='ts'>

const changeArea = (areaData: any) => {
  console.log(areaData);
};

</script>

<style lang='scss' scoped>

</style>