import { ElMessage } from 'element-plus'
export const useCopy = (name: string) => {
  // 创建一个input标签
  const inputEle = document.createElement('input');
  // 给输入框value赋值
  inputEle.value = name;
  // 追加到body里面去
  document.body.appendChild(inputEle);
  // 选择输入框的操作
  inputEle.select();
  // 执行赋值操作
  document.execCommand('Copy');
  // 删除加入的输入框
  document.body.removeChild(inputEle);
  ElMessage({
    showClose: true,
    message: '复制成功',
    type: 'success'
  })
};