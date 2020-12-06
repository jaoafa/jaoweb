import Sass from 'sass'
import Fiber from 'fibers'
import Webpack from 'webpack'

export default {
  head: {
    titleTemplate: '%s｜jao Minecraft Server',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'apple-mobile-web-app-title', content: 'jao Minecraft Server' },
      { name: 'application-name', content: 'jao Minecraft Server' },
      { name: 'msapplication-TileColor', content: '#ffb41d' },
      { name: 'msapplication-config', content: '/favicons/browserconfig.xml' },
      { name: 'theme-color', content: '#ffb41d' },
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
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources'],
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
