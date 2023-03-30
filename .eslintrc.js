/** @type {import('eslint').ESLint.ConfigData} */

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-var': 'error',
    'no-console': 'error',
    'no-alert': 'error',
    'no-unused-vars': 'error',
    indent: ['error', 2],
    semi: ['error', 'always'],
    '@typescript-eslint/semi': ['error', 'always'],
    quotes: ['error', 'single'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-undef': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],
    'prettier/prettier': 'error'
  }
};
