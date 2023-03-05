<template>
  <notification :value="12">
    <m-list :list="list" :actions="actions"></m-list>
  </notification>
</template>

<script setup lang='ts'>
import { list, actions } from './data';
console.log(list);
</script>

<style lang='scss' scoped>

</style>