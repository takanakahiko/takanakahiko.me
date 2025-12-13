import { defineNuxtConfig } from 'nuxt/config'

const pkg = require('./package')

export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/',

  app: {
    head: {
      title: 'takanakahiko I/O',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: pkg.description },
        { hid: 'og:site_name', property: 'og:site_name', content: 'takanakahiko I/O' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://takanakahiko.me' },
        { hid: 'og:title', property: 'og:title', content: 'takanakahiko I/O' },
        { hid: 'og:description', property: 'og:description', content: pkg.description },
        { hid: 'og:image', property: 'og:image', content: 'https://takanakahiko.me/images/Announce_Page_OG_Image.jpg' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@takanakahiko' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [
        {
          src:
            'https://cdn.polyfill.io/v2/polyfill.min.js?features=IntersectionObserver,IntersectionObserverEntry'
        }
      ]
    },
  },

  // loading: { color: '#fff' },

  css: [
    '@/assets/bulma-style.scss',
    '@/assets/fill-in.css',
    '@/../node_modules/bulma-timeline/dist/css/bulma-timeline.min.css',
    '@mdi/font/scss/materialdesignicons.scss',
    'bootstrap-icons/font/bootstrap-icons.css',
  ],

  modules: [
    // ['@nuxtjs/google-adsense', {
    //   id: 'ca-pub-3487572990110265',
    //   pageLevelAds: true
    //   // analyticsUacct: 'UA-XXX-X',
    //   // analyticsDomainName: 'example.com'
    // }],
    // ['@nuxtjs/google-gtag', {
    //   id: 'UA-87763752-1',
    //   debug: true,
    // }]
  ],

  build: {
    transpile: [
      'three/examples/jsm/controls/OrbitControls.js'
    ]
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // 依存側( @mdi/font, bulma )の警告がうるさいので無視
          silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import']
        },
      },
    },
  },

  compatibilityDate: '2025-01-01',
})
