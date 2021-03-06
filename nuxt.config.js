export default {
  head: {
    title: 'horizon',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
  },
  css: ['@/assets/css/main.css', 'swiper/css/swiper.css'],
  plugins: ['~/plugins/swiper', '~/plugins/feather-icons'],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxt/postcss8'],
  modules: [
    '@nuxtjs/pwa',
    [
      '@openafg/nuxt-fullpage',
      {
        activeSection: 0,
        mouseWheelSensitivity: 120,
        showIndicators: true,
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
