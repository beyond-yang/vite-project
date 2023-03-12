<template>
  <notification :value="12">
    <m-list
      :list="list"
      :actions="actions"
      @item-click="clickItem"
      @action-click="clickAction">
    </m-list>
  </notification>
</template>

<script setup lang='ts'>
import { list, actions } from './data';
import { ActionOptions, ListItem } from '@/components/list/src/types'
console.log(list);
const clickItem = (itemInfo: { item: ListItem, index: number}) => {
  console.log(itemInfo);
};

const clickAction = (itemInfo: { item: ActionOptions, index: number}) => {
  console.log(itemInfo);
};
</script>

<style lang='scss' scoped>

</style>