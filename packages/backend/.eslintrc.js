module.exports = {
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['src', './src'],
          ['tests', './src/__tests__'],
          ['database', './src/database']
        ],
        extenstions: ['.js']
      }
    }
  },
  rules: {
    "import/no-unresolved": 1
  }
};
