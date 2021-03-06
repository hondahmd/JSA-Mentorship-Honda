module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ['airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018
  },
  plugins: ['react', 'prettier', 'jest'],
  rules: {
    'indent': [1, 2],
    'react/jsx-indent': [1, 2],
    'react/jsx-filename-extension': 0,
    'prettier/prettier': ['error']
  }
};
