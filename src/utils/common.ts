export const toLine = (value: string) => {
  // 把大写字母分组，连接上-，再转化为小写
  return value.replace(/(A-Z)g/, '-$1').toLocaleLowerCase();
}