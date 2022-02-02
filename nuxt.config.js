export default {
  head: {
    title: 'horizon',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['@/assets/css/main.css'],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxt/postcss8'],
  modules: [
    '@nuxtjs/pwa',
    [
      '@openafg/nuxt-fullpage',
      {
        activeSection: 0,
        mouseWheelSensitivity: 120,
        showIndicators: false,
      },
    ],
  ],
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
