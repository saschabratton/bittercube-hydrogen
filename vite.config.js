import { defineConfig } from 'vite'
import hydrogen from '@shopify/hydrogen/plugin'
import { resolve } from 'path'

export default defineConfig({
  plugins: [hydrogen()],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
      '@server': resolve(__dirname, 'src/components/index.server.js'),
      '@client': resolve(__dirname, 'src/components/index.client.js'),
      '@utils': resolve(__dirname, 'src/utilities')
    }
  },
})
