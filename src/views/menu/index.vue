<template>
  <div>
    <!-- <m-menu :data="data" defaultActive="1"></m-menu> -->
    <!-- <el-button type="success" plain>Success</el-button> -->
    <m-infinite-menu :data="data2" defaultActive="1"></m-infinite-menu>
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

const data2 = [
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
        index: '3-1',
        children: [
          {
            icon: 'Edit',
            name: '导航3-1-1',
            index: '3-1-1',
            children: [
              {
                icon: 'Edit',
                name: '导航3-1-1-1',
                index: '3-1-1-1'
              },
            ]
          }
        ]
      },
    ]
  }
]
</script>

<style lang='scss' scoped></style>