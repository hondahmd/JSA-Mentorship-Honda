module.exports = {
  settings: {
    'import/resolver': {
      'babel-module': {
        src: './src',
        tests: './src/__tests__',
        components: './src/components',
        constants: './src/constants',
        containers: './src/containers',
        actions: './src/actions',
        reducers: './src/reducers',
        thunks: './src/thunks'
      }
    }
  },
  plugins: [
    "react-hooks"
  ],
  rules: {
    'import/no-extraneous-dependencies': 1,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-shadow": "warn"
  }
};
