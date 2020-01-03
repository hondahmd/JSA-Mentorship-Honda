const { override, addWebpackAlias } = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const path = require('path');

const resolve = dir => path.join(__dirname, '.', dir);

module.exports = override(
  addWebpackAlias({
    src: resolve('src'),
    tests: resolve('src/__tests__'),
    constants: resolve('src/constants'),
    components: resolve('src/components'),
    containers: resolve('src/containers')
  }),
  (config, env) => {
    config = rewireReactHotLoader(config, env);
    return config;
  }
);
