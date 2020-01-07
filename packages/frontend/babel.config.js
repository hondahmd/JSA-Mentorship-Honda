module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
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
    ]
  ]
};
