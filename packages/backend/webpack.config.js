const path = require('path');

module.exports = {
  alias: {
    src: path.resolve(__dirname, './src/'),
    tests: path.resolve(__dirname, './__tests__')
  }
};
