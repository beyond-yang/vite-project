import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 自动引入插件
import AutoImport from 'unplugin-auto-import/vite';
// 按需引入插件
import Components from 'unplugin-vue-components/vite';
// ui框架
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// 更改src的别名
import { join } from 'path';
// 配置vite时自动检查 eslint规范
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // 增加下面的配置项,这样在运行时就能检查eslint规范
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
    }),
  ],
  resolve: {
    alias: {
      '@': join(__dirname, 'src'), // 需要配合tsconfig.json文件配置baseUrl和paths设置src别名@
    },
  },
})
