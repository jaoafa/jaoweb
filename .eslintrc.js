module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'standard',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
  ],
  plugins: ['prettier', 'vue'],
  rules: {
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
}
