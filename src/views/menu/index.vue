<template>
  <div>
    <m-menu :data="data" defaultActive="1"></m-menu>
  </div>
</template>

<script setup lang='ts'>
const data = [
  {
    icon: 'Edit',
    name: '导航1',
    index: '1'
  },
  {
    icon: 'Edit',
    name: '导航2',
    index: '2'
  },
  {
    icon: 'Edit',
    name: '导航3',
    index: '3',
    children: [
      {
        icon: 'Edit',
        name: '导航3-1',
        index: '3-1'
      },
    ]
  }
]
</script>

<style lang='scss' scoped></style>