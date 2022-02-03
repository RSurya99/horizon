module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#363E63',
        secondary: '#4956A3',
        tertiary: '#F7C028',
        blueSecondary: '#4B94C7',
        primaryText: '#121521',
        backgroundColor1: '#F2F3F8',
        backgroundColor2: '#40486D',
        backgroundColor3: '#202020',
      },
    },
  },
  plugins: [],
}
