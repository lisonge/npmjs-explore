import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import monkeyPlugin from 'vite-plugin-monkey';
import * as path from 'path';

export default defineConfig({
    plugins: [
        preact(),
        monkeyPlugin({
            entry: 'src/main.tsx',
            userscript: {
                icon: 'https://i.songe.li/favicon.svg',
                namespace: 'https://github.com/lisonge',
                match: ['https://www.npmjs.com/package/*'],
                include: [/^https:\/\/www.npmjs.com\/package\/.*/],
                name: {
                    '': 'npmjs-explore',
                    zh: 'npmjs文件查看',
                },
            },
            build: {
                externalGlobals: {
                    preact: [
                        'preact',
                        (version) =>
                            `https://cdn.jsdelivr.net/npm/preact@${version}/dist/preact.min.js`,
                    ],
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});
