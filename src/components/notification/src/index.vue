<template>
  <div>
    <el-badge :value="value" :max="max" :is-dot="isDot" >
      <el-icon>
        <component :is="icon"></component>
      </el-icon>
  </el-badge>
  </div>
</template>
<script setup lang='ts'>
const props = defineProps({
  icon: {
    type: String,
    default: 'Bell'
  },
  value: {
    type: [String, Number],
    value: ''
  },
  max: {
    type: Number,
    value: 99
  },
  isDot: {
    type: Boolean,
    default: false
  },

});

</script>

<style lang='scss' scoped>

</style>