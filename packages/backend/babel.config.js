module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          src: './src',
          tests: './src/__tests__',
          database: './src/database',
          server: './src/server',
          controllers: './src/server/controllers',
          routes: './src/server/routes',
          keys: './keys'
        }
      }
    ]
  ]
};
