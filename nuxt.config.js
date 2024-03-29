export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  transition: 'slide-fade',
  router: {
    linkExactActiveClass: 'exact-active-link'
  },
  loading: { color: '#c7843db8', height: '3px' },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css",
        integrity: "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",
        crossorigin: "anonymous"
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cairo&display=swap'
      }
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/daad4d5851.js",
        crossorigin: "anonymous"
      },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/style.scss',
    '~/assets/fonts/fonts.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: "~/plugins/vue-swiper.js", ssr: false },
    { src: '~plugins/vue-full-calendar', ssr: false, mode: 'client' },
    { src: '~plugins/vee-validate', ssr: false }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        strategy: 'prefix_except_default',
        locales: [
          {
            code: 'en',
            file: 'en.js'
          },
          {
            code: 'ar',
            file: 'ar.js'
          }
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'en',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected'
          , alwaysRedirect: true,
        },
        vueI18n: {
          fallbackLocale: 'en'
        }
      }
    ]
  ],
  /*
  ** Axios module configuration
  ** See http://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://admin.alwstage.tk/',
    proxy: true
  },
  proxy: {
    '/api/': 'http://admin.alwstage.tk/'
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    transpile: [
      "vee-validate/dist/rules"
    ]
  }
}
