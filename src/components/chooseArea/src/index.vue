<template>
  <div>
    <!-- 省 -->
    <el-select v-model="province" placeholder="请选择省份" style="margin-right: 10px">
      <el-option v-for="item in provinces" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
    <!-- 市 -->
    <el-select v-model="city" :disabled="!province" placeholder="请选择城市" style="margin-right: 10px">
      <el-option v-for="item in cities" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
    <!-- 区县 -->
    <el-select v-model="county" :disabled="!city" placeholder="请选择区县">
      <el-option v-for="item in counties" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
  </div>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue';
import allAreas from '../lib/pca-code.json'
let province = ref('');
let city = ref('');
let county = ref('');

let provinces = ref<any>(allAreas);
let cities = ref<any>([]);
let counties = ref<any>([]);

watch(() => province.value, (val) => {
  if (val) {
    const selectCities = provinces.value.find((item: any) => item.code === val)?.children;
    cities.value = selectCities;
    city.value = '';
    county.value = '';
  }
});

watch(() => city.value, (val) => {
  if (val) {
    const selectCounties = cities.value.find((item: any) => item.code === val)?.children;
    counties.value = selectCounties;
    county.value = '';
  }
});


</script>

<style lang='scss' scoped></style>