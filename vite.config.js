import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

// Get all HTML files in the root directory
const htmlFiles = fs.readdirSync(process.cwd())
  .filter(file => file.endsWith('.html') && file !== 'index.html');

const inputFiles = {
  main: resolve(process.cwd(), 'index.html'),
  ...htmlFiles.reduce((acc, file) => {
    acc[file.replace('.html', '')] = resolve(process.cwd(), file);
    return acc;
  }, {})
};

export default defineConfig({
  build: {
    rollupOptions: {
      input: inputFiles,
    },
  },
});
