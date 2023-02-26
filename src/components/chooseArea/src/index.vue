<template>
  <div>
    <!-- 省 -->
    <el-select v-model="province" clearable placeholder="请选择省份" style="margin-right: 10px">
      <el-option v-for="item in provinces" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
    <!-- 市 -->
    <el-select v-model="city"
      :disabled="!province"
      clearable
      placeholder="请选择城市"
      style="margin-right: 10px">
      <el-option v-for="item in cities" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
    <!-- 区县 -->
    <el-select v-model="county" :disabled="!city" clearable placeholder="请选择区县">
      <el-option v-for="item in counties" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
  </div>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue';
import allAreas from '../lib/pca-code.json'

export interface areaData {
  name: string,
  code: string,
  children?: areaData[]
}

let emit = defineEmits(['change']);

let province = ref<string>('');
let city = ref<string>('');
let county = ref<string>('');

let provinces = ref<areaData[]>(allAreas);
let cities = ref<areaData[]>([]);
let counties = ref<areaData[]>([]);

watch(() => province.value, (val) => {
  if (!val) return;
  const selectCities = provinces.value.find((item: areaData) => item.code === val)?.children!;
    cities.value = selectCities;
    city.value = '';
    county.value = '';
});

watch(() => city.value, (val) => {
  if (!val) return;
  const selectCounties = cities.value.find((item: any) => item.code === val)?.children!;
    counties.value = selectCounties;
    county.value = '';
});

watch(() => county.value, (val) => {
  if (!val) return;
  const emitData = {
    province: {
      name: provinces.value.find((item) => item.code === province.value)?.name,
      code: province.value
    },
    city: {
      name: cities.value.find((item) => item.code === city.value)?.name,
      code: city.value
    },
    county: {
      name: counties.value.find((item) => item.code === county.value)?.name,
      code: county.value
    }
  }
  emit('change', emitData);
});


</script>

<style lang='scss' scoped></style>