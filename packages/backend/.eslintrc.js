module.exports = {
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['src', './packages/backend/src'],
          ['tests', './packages/backend/src/__tests__'],
          ['database', './packages/backend/src/database']
        ],
        extenstions: ['.js']
      }
    }
  },
  rules: {
    "import/no-unresolved": 1
  }
};
