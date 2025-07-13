import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { name } from './package.json'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/lib/index.ts',
      name: name.replace(/-([a-z])|([a-z])(?=\b)/gi, (_match, char1, char2) => char1 || char2).toUpperCase(),
      fileName: format => `${name}.${format}.js`,
    },
    minify: false,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src'),
      lib: resolve(import.meta.dirname, 'src/lib'),
      playground: resolve(import.meta.dirname, 'src/playground'),
    },
  },
})
