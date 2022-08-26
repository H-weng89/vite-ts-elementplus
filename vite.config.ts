import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  build: {
    outDir: 'dist', //打包名称
    minify:'terser',
    terserOptions:{
        compress:{
            //生产环境移除console
            drop_console:true,
                drop_debugger:true
            
        }
    }
  },
  server: {
    //代理配置
proxy: {
  
  // 选项写法
  '/api': {
    target: 'http://jsonplaceholder.typicode.com',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, '')
  },
}
},
  plugins: [vue(),AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),],
  resolve: {
    alias: [
      {find: '@', replacement: path.resolve(__dirname, 'src')},
      { find: /^~/, replacement: '' }
    ]

  }
})
