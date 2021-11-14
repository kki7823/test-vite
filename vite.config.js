import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})

// module.exports = {
//   alias: {
//     vue: 'vue/dist/vue.esm-bundler.js',
//   },
// }

