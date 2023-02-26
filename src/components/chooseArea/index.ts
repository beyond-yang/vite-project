import { App } from 'vue';
import chooseArea from './src/index.vue';

// 让这个组件可以通过 app.use 的方式使用
export default {
  install(app: App) {
    // 注册全局组件
    app.component('chooseArea', chooseArea);
  }
}