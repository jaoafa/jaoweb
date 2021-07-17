module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recess-order',
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['use', 'forward', 'include', 'mixin', 'each'] },
    ],
  },
}
