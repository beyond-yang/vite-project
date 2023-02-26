import { createApp } from 'vue'
import router from '@/router'
import { createPinia } from 'pinia'
// import './style.css'
import { toLine } from '@/utils/common'
// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  /*
   * console.log('啦啦啦啦', `el-icon-${toLine(key)}`);
   * app.component(`el-icon-${toLine(key)}`, component)
   */
  app.component(key, component)

}

app.use(router).use(createPinia()).mount('#app');
