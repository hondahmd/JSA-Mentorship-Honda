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
  rules: {
    'import/no-extraneous-dependencies': 1
  }
};
