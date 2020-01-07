module.exports = {
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['src', './packages/backend/src'],
          ['tests', './packages/backend/src/__tests__'],
          ['database', './packages/backend/src/database'],
          ['server', './packages/backend/src/server'],
          ['controllers', './packages/backend/src/server/controllers'],
          ['routes', './packages/backend/src/server/routes'],
          ['keys', './packages/backend/keys']
        ],
        extenstions: ['.js']
      }
    }
  }
};
