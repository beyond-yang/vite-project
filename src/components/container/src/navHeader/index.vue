<template>
  <div class="header-container">
    <span style="cursor: pointer;" @click="toggleStatus">
      <el-icon v-if="collapse">
        <Expand />
      </el-icon>
      <el-icon v-else>
        <Fold />
      </el-icon>
    </span>
  </div>
</template>

<script setup lang='ts'>
let props = defineProps<{
  collapse: boolean
}>();
let emits = defineEmits(['update:collapse']);

const toggleStatus = () => {
  emits('update:collapse', !props.collapse)
};
</script>

<style lang='scss' scoped>
.header-container {
  display: flex;
  align-items: center;
  height: 100%;
  border-bottom: 1px solid #ccc;
}
</style>