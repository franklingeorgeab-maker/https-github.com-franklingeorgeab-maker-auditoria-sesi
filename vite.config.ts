import tailwindcss from '@tailwindcss/vite';
import {defineConfig} from 'vite';
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  plugins: [
    tailwindcss(),
    viteSingleFile()
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: process.env.DISABLE_HMR !== 'true',
  },
  build: {
    target: "esnext",
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    rollupOptions: {
      inlineDynamicImports: true,
    },
  },
});
