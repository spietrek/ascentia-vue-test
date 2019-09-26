module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    'prettier/vue',
    'plugin:prettier/recommended',
  ],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'error',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
