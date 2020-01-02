const app = require('src/main');

test('init express instance', () => {
  expect(typeof app).toEqual('function');
});
