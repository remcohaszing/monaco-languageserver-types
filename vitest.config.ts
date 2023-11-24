import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    css: true,
    environment: 'jsdom',
    isolate: false,
    reporters: 'verbose',
    threads: false
  }
})
