import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    reporters: 'verbose',
    poolOptions: {
      forks: {
        isolate: false,
        singleFork: true
      }
    }
  }
})
