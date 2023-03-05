// 此文件是后面主要使用的文件
import { App } from 'vue';
import chooseArea from './chooseArea';
import chooseIcon from './chooseIcon';
import trendMark from './trend';

const components = [
  chooseArea,
  chooseIcon,
  trendMark
];

export default {
  install(app: App) {
    components.forEach((item) => {
      app.use(item);
    });
  }
}