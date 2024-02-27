import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // your test configurations...
    globals: true,
    environment: 'jsdom',
  },
})
