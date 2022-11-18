import { defineConfig } from 'vite'
import hydrogen from '@shopify/hydrogen/plugin'
import { resolve } from 'path'

export default defineConfig({
  plugins: [hydrogen()],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components')
    }
  },
})
