import { App } from 'vue'
import chooseIcon from './src/index.vue'

// 让使用者可以使用 app.use 方法使用这个组件
export default {
  install(app: App) {
    // 全局注册组件
    app.component('chooseIcon', chooseIcon);
  }
}