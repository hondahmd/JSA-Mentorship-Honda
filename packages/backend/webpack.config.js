const path = require('path');

const resolve = dir => path.join(__dirname, '.', dir);

module.exports = {
  alias: {
    src: resolve('src'),
    tests: resolve('src/__tests__'),
    database: resolve('src/database')
  }
};
