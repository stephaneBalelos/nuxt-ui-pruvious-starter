// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['pruvious', '@nuxt/ui'],

  css: ['~/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        }
      }
    }
  },
  

  pruvious: {
    jwt: {
      secretKey: process.env.NUXT_JWT_SECRET_KEY,
    },
    database: process.env.NUXT_PRUVIOUS_DATABASE,
  }
})