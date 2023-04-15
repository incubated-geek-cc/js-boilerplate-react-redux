module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: [ 'eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended']
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      node: { extensions: ['.js', '.jsx'] },
    }
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages', { js: 'never', jsx: 'never' }
    ],
    'react/jsx-filename-extension': [ 2, { extensions: ['.js', '.jsx'] } ],
  }
};
