import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { viteMockServe } from 'vite-plugin-mock';
import vueJsx from '@vitejs/plugin-vue-jsx';

const pathResolve = (dir: string) => resolve(__dirname, dir);

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8888,
    open: true
  },
  plugins: [
    vue(),
    viteMockServe({
      mockPath: "mock"
    }),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': pathResolve('./src'),
      'pages': pathResolve('./src/pages'),
      'components': pathResolve('./src/components'),
      'assets': pathResolve('./src/assets'),
      'utils': pathResolve('./src/utils'),
      'plugins': pathResolve('./src/plugins'),
      'services': pathResolve('./src/services'),
      'hooks': pathResolve('./src/hooks'),
      'store': pathResolve('./src/store'),
      'domain': pathResolve('./src/domain')
    }
  }
});
