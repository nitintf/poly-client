/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'node:path';
import { URL } from 'node:url';
import envars from 'envars';

import { Config } from './config';

let environmentName = process.env.NODE_ENV;

if (!environmentName) {
  console.warn('No environment specified, using local configuration');
  environmentName = 'local';
}

// Bootstrap client-side configuration from environment variables
const envDir = resolve(__dirname, './env');
const environment = envars.config({ env: environmentName, cwd: envDir });

const config: Config = {
  app: {
    env: environmentName,
    name: environment.APP_NAME,
    origin: environment.APP_ORIGIN,
    hostname: new URL(environment.APP_ORIGIN).hostname,
  },
  api: {
    url: new URL(environment.API_ORIGIN).hostname,
  },
};

// Pass client-side configuration to the web app
// https://vitejs.dev/guide/env-and-mode.html#env-variables-and-modes
process.env.VITE_CONFIG = JSON.stringify(config);

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  cacheDir: `../.cache/vite-app`,
  plugins: [react(), tsconfigPaths()],
  css: { postcss: { plugins: [] } },
  test: {
    cache: { dir: '../.cache/vitest' },
    setupFiles: ['./tests/setup.ts'],
    include: ['./src/**/*.test.{ts,tsx}'],
    environment: 'jsdom',
    globals: true,
    coverage: {
      include: ['src/**/*.{ts,tsx}'],
      all: true,
      provider: 'v8',
    },
  },
});
