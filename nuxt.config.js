const baseName = process.env.BASE_NAME || 'jao Minecraft Server'
const baseUrl = process.env.BASE_URL || 'https://jaoafa.com'
const baseDir = process.env.BASE_DIR || '/'
const baseImage = process.env.BASE_IMAGE || '/img/jao.png'
const baseDescription =
  process.env.BASE_DESCRIPTION ||
  'ここで爆発します、あなたの可能性が。jao Minecraft Serverの公式Webサイトです。'

export default {
  target: 'static',

  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    titleTemplate: '%s｜' + baseName,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'apple-mobile-web-app-title', content: baseName },
      { name: 'application-name', content: baseName },
      { name: 'msapplication-TileColor', content: '#ffb41d' },
      { name: 'msapplication-config', content: '/favicons/browserconfig.xml' },
      { name: 'theme-color', content: '#ffb41d' },
      { hid: 'description', name: 'description', content: baseDescription },
      { hid: 'og:site_name', property: 'og:site_name', content: baseName },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:url', property: 'og:url', content: baseUrl },
      { hid: 'og:title', property: 'og:title', content: baseName },
      {
        hid: 'og:description',
        property: 'og:description',
        content: baseDescription,
      },
      { hid: 'og:image', property: 'og:image', content: baseUrl + baseImage },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@jaoafa' },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicons/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/favicons/site.webmanifest' },
      {
        rel: 'mask-icon',
        href: '/favicons/safari-pinned-tab.svg',
        color: '#ffb41d',
      },
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: '/favicons/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.7.55/css/materialdesignicons.min.css',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap',
      },
      { rel: 'stylesheet', href: 'https://use.typekit.net/ibc0rnp.css' },
    ],
  },

  css: ['@/assets/sass/reset.scss'],

  plugins: [],

  components: true,

  generate: {
    routes: async () => {
      const { $content } = require('@nuxt/content')
      const limit = 9
      const pages = await $content('/blog').fetch()
      const total = Math.ceil(pages.length / limit)
      return [...Array(total)].map((_, i) => `/blog/page/${i + 1}`)
    },
    fallback: true,
  },

  router: {
    base: baseDir,
  },

  publicRuntimeConfig: {
    baseName,
    baseDescription,
    baseUrl,
    baseImage,
  },

  privateRuntimeConfig: {},

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/google-analytics',
  ],

  modules: [
    '@nuxt/content',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
  ],

  googleAnalytics: {
    id: 'UA-93539040-2',
    dev: process.env.NODE_ENV === 'development',
  },

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-atom-dark.css',
      },
    },
  },

  axios: {},

  sitemap: {
    hostname: baseUrl,
    routes: async () => {
      const { $content } = require('@nuxt/content')
      const pages = await $content('/', { deep: true })
        .only(['path', 'extension', 'updatedAt'])
        .fetch()
      return pages
        .filter((item) => item.extension === '.md')
        .map((item) => {
          return {
            url: item.path,
            lastmod: item.updatedAt,
          }
        })
        .map((item) => {
          if (item.url.endsWith('/index')) {
            item.url = item.url.replace(/\/index$/, '')
          }
          return item
        })
    },
  },

  build: {
    loaders: {
      scss: {
        implementation: require('sass'),
        sassOptions: {
          fiber: require('fibers'),
        },
      },
    },
  },
}
