<template>
  <div>
    <el-button @click="toggleStatus">
      <slot></slot>
    </el-button>
    <el-dialog v-model="dialogVisible" :title="title" width="60%">
      111
      <!-- <span>This is a message</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="toggleStatus">Cancel</el-button>
          <el-button type="primary" @click="toggleStatus">
            Confirm
          </el-button>
        </span>
      </template> -->
    </el-dialog>
  </div>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue';
let props = defineProps<{
  title: string,
  visible: boolean
}>();

let emit = defineEmits(['update:visible']);

let dialogVisible = ref(props.visible);

const toggleStatus = () => {
  dialogVisible.value = true;
}

watch(() => dialogVisible.value, (value) => {
  emit('update:visible', value);
});

</script>

<style lang='scss' scoped></style>