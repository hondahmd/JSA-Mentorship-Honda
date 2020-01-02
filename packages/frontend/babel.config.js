module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          src: './src',
          tests: './src/__tests__'
        }
      }
    ]
  ]
};
