import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
// import { kebCaseToLowerCamelCase } from '@/utils/common';

// 首次必然要加载的路由
const constRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/components/container/src/index.vue'),
    children: [
      {
        path: '/',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/chooseIcon',
        component: () => import('@/views/chooseIcon/index.vue')
      },
      {
        path: '/chooseArea',
        component: () => import('@/views/chooseArea/index.vue')
      },
      {
        path: '/trendMark',
        component: () => import('@/views/trendMark/index.vue')
      }
    ]
  },
];

let routes:Array<RouteRecordRaw> = [...constRoutes];

const files: Record<string, any> = import.meta.glob(['./*/*.ts', './*.ts'], { eager: true });

// 引入同级的文件
Object.keys(files).forEach((path : string) => {
  if (files[path]?.default) {
    routes = [...routes, ...files[path].default];
  }
});

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 导出路由
export default router;
