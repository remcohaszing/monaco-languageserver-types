import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    deps: { inline: ['monaco-editor'] },
    isolate: false,
    reporters: 'verbose',
    threads: false
  }
})
