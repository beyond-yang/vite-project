<template>
  <div class="select-icon">
    <el-button @click="toggleStatus">
      <slot></slot>
    </el-button>
    <div class="m-select-icon-dialog-body-height">
      <el-dialog v-model="dialogVisible" :title="title" width="60%">
        <div class="dialog-body">
          <div class="icon-container"
            v-for="(item, index) in Object.keys(ElementPlusIconsVue)"
            :key="index"
            @click="clickCopy(item)">
            <div class="icon">
              <el-icon>
                <component :is="item"></component>
              </el-icon>
            </div>
            <div class="text">{{ item }}</div>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { useCopy } from '@/hooks/useCopy/index'
console.log('哈哈哈', ElementPlusIconsVue);
let props = defineProps<{
  title: string,
  visible: boolean
}>();

let emit = defineEmits(['update:visible']);

let dialogVisible = ref(props.visible);

const toggleStatus = () => {
  dialogVisible.value = true;
}

const clickCopy = (iconName: string) => {
  useCopy(`<el-icon><${iconName} /></el-icon>`);
};

watch(() => dialogVisible.value, (value) => {
  emit('update:visible', value);
});

</script>

<style lang='scss' scoped>
.select-icon {
  .dialog-body {
    display: flex;
    flex-wrap: wrap;

    .icon-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 33%;
      padding: 20px 0;
      cursor: pointer;

      &:hover {
        background-color: #f2f6fc;
      }

      .icon {
        font-size: 22px;
      }
    }
  }
}
</style>