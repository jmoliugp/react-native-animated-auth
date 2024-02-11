module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'jest',
    'prettier',
    'simple-import-sort',
    'sort-keys-fix',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    curly: 'off',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-nested-ternary': 'error',
    'no-shadow': 'off',
    'react-hooks/exhaustive-deps': 'off',
    semi: 'off',
    'simple-import-sort/imports': 'error',
    'sort-keys': 'error',
  },
}
