module.exports = {
  extends: '@gidw/eslint-config-standard',
  env: {
    node: true
  },
  plugins: [
    'node'
  ],
  rules: {
    'node/handle-callback-err': [
      'error',
      '^(err|error)$'
    ],
    'node/no-callback-literal': 'error',
    'node/no-deprecated-api': 'error',
    'node/no-exports-assign': 'error',
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
    'node/process-exit-as-throw': 'error'
  }
}
