// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/scss/global.scss',
  ],
  app: {
    baseURL: '/resume/'
  }
})
