import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
// import { kebCaseToLowerCamelCase } from '@/utils/common';

// 首次必然要加载的路由
const constRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
];

let routes:Array<RouteRecordRaw> = [...constRoutes];

// // 自动添加router目录下的所有ts路由模块
// const files = require.context('./', false, /\.ts$/);
// eager 自动推断类型
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
