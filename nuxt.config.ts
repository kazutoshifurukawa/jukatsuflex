// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: ['@nuxthq/ui', '@nuxtjs/eslint-module'],
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true,
  },
  ui: {
    global: true,
    icons: ['mdi'],
  },
  runtimeConfig: {
    public: {
      API_ENDPOINT: process.env.API_ENDPOINT || '',
    },
  },
})
