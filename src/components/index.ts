// 此文件是后面主要使用的文件
import { App } from 'vue';
import chooseArea from './chooseArea';
import chooseIcon from './chooseIcon';
import trendMark from './trend';
import notification from './notification';
import list from './list';
import menu from './menu';
import progress from './progress';
import chooseTime from './chooseTime';
import chooseDate from './chooseDate';

const components = [
  chooseArea,
  chooseIcon,
  trendMark,
  notification,
  list,
  menu,
  progress,
  chooseTime,
  chooseDate
];

export default {
  install(app: App) {
    components.forEach((item) => {
      app.use(item);
    });
  }
}