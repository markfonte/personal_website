module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: ['google', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // increase max-len error to trigger only on lines > 120 characters
    'max-len': ['error', {code: 120}],
    // don't require jsdoc for every single function of every single component
    'require-jsdoc': 0,
    "linebreak-style": 1,
    "no-invalid-this": 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
