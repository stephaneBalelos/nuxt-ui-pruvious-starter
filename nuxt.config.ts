// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['pruvious', '@nuxt/ui', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Lato: {
        wght: [400, 700],
        ital: [400, 700],
      },
      Poppins: [500],
    },
  },

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