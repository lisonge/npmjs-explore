import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';
import monkey, { cdn } from 'vite-plugin-monkey';

export default defineConfig({
  plugins: [
    preact(),
    monkey({
      entry: 'src/main.tsx',
      userscript: {
        icon: 'https://i.songe.li/favicon.svg',
        namespace: 'https://github.com/lisonge',
        match: ['https://www.npmjs.com/package/*'],
        include: [/^https:\/\/www.npmjs.com\/package\/.*/],
        name: {
          zh: 'npmjs文件查看',
        },
      },
      build: {
        externalGlobals: {
          preact: cdn.jsdelivr('preact'),
        },
      },
    }),
  ],
});
