const { dependencies } = require('./package.json')
const withTM = require('next-transpile-modules')(
  Object.keys(dependencies || []).filter(dependency =>
    dependency.startsWith('colorless-core')
  )
)

module.exports = withTM()
