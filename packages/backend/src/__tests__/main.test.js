const app = require('src/server/main');

test('init express instance', () => {
  expect(typeof app).toEqual('function');
});
