import { App } from "vue";
import progress from './src/index.vue';

// 让这个组件可以通过app.use的方式使用
export default {
  install(app: App) {
    app.component('m-progress', progress);
  }
}