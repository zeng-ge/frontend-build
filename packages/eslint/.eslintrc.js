module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: [
    'standard'
  ],
  plugins: [
    'standard'
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
    jquery: true,
    es6: true
  },
  globals: {
    window: 'off'
  },
  rules: {
    'no-console': ['error', {allow: ['error']}],
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'no-undef': 'error'
  }
}
