module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          src: './src',
          tests: './src/__tests__',
          database: './src/database'
        }
      }
    ]
  ]
};
