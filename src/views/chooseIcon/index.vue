<template>
  <div>
    <chooseIcon title="选择图标" v-model:visible="visible">选择图标</chooseIcon>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
const visible = ref(false);

</script>

<style lang='scss' scoped>
</style>