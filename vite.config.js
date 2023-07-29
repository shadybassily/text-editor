import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
   define: {
      global: 'window',
   },
   base: '/text-editor',
   plugins: [react()],
   server: {
      host: true,
   },
   resolve: {
      alias: {
         '@': path.resolve(__dirname, './src'),
         '~': path.resolve(__dirname),
      },
   },
});
