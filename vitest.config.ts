import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    css: true,
    environment: 'jsdom',
    reporters: 'verbose',
    include: ['test/*.test.ts'],
    poolOptions: {
      threads: {
        isolate: false
      }
    }
  }
})
