<template>
  <m-menu :data="data"
:defaultActive="$route.path"
:collapse="collapse"
router></m-menu>
</template>

<script setup lang='ts'>
let props = defineProps<{
  collapse: boolean
}>();

const data = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/'
  },
  {
    icon: 'Check',
    name: '图标选择器',
    index: '/chooseIcon'
  },
  {
    icon: 'Location',
    name: '省市区选择',
    index: '/chooseArea'
  },
  {
    icon: 'Sort',
    name: '趋势标记',
    index: '/trendMark'
  },
  {
    icon: 'Clock',
    name: '时间选择',
    index: '/TimeSelect'
  },
  {
    icon: 'Bell',
    name: '通知菜单',
    index: '/notification'
  },
  {
    icon: 'Menu',
    name: '导航菜单',
    index: '/menu'
  },
  {
    icon: 'Menu',
    name: '无限层级导航菜单',
    index: '/infinite-menu'
  },
  {
    icon: 'More',
    name: '进度条',
    index: '/progress'
  }
];

</script>

<style lang='scss' scoped>
</style>