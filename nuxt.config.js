import Sass from 'sass'
import Fiber from 'fibers'
import Webpack from 'webpack'

export default {
  head: {
    titleTemplate: '%s｜jao Minecraft Server',
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'jao Minecraft Server',
      },
      {
        name: 'application-name',
        content: 'jao Minecraft Server',
      },
      {
        name: 'msapplication-TileColor',
        content: '#ffb41d',
      },
      {
        name: 'msapplication-config',
        content: '/favicons/browserconfig.xml',
      },
      {
        name: 'theme-color',
        content: '#ffb41d',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'ここで爆発します、あなたの可能性が。jao Minecraft Serverの公式Webサイトです。',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'jao Minecraft Server',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'article',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://jaoafa.com',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'jao Minecraft Server',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'ここで爆発します、あなたの可能性が。jao Minecraft Serverの公式Webサイトです。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://jaoafa.com/img/jao.png',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@jaoafa',
      },
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
      {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/ibc0rnp.css',
      },
    ],
  },
  css: ['@/assets/sass/_reset.scss'],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],
  modules: ['@nuxt/content', '@nuxtjs/axios', '@nuxtjs/style-resources'],
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-atom-dark.css',
      },
    },
  },
  axios: {},
  styleResources: {
    scss: ['@/assets/sass/_variables.scss', '@/assets/sass/_mixins.scss'],
  },
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber,
        },
      },
    },
    plugins: [
      new Webpack.ProvidePlugin({
        _: 'lodash',
      }),
    ],
  },
}
