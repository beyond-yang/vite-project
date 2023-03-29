<template>
  <div>
    <m-menu :data="data" defaultActive="1" :alias="defaultProps"></m-menu>
  </div>
</template>

<script setup lang='ts'>
const data = [
  {
    icon1: 'Edit',
    name1: '导航1',
    index1: '1'
  },
  {
    icon1: 'Edit',
    name1: '导航2',
    index1: '2'
  },
  {
    icon1: 'Edit',
    name1: '导航3',
    index1: '3',
    children1: [
      {
        icon1: 'Edit',
        name1: '导航3-1',
        index1: '3-1'
      },
    ]
  }
]
const defaultProps = {
  name: 'name1',
  icon: 'icon1',
  index: 'index1',
  children: 'children1'
}
</script>

<style lang='scss' scoped></style>