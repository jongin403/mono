import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'], // ✅ CJS 제거하고 ESM만 남김
      fileName: () => `index.js`, // ✅ 파일명을 명확하게 지정
    },
    outDir: 'dist',
    sourcemap: true,
  },
  plugins: [dts({ insertTypesEntry: true })],
});
