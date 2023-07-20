// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxthq/ui',
    '@nuxtjs/eslint-module',
  ],
  typescript: {
    shim: true,
    strict: true,
    typeCheck: true,
  },
})
