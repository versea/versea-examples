module.exports = function override (config) {
  config.output.library = 'child-react18'
  config.output.libraryTarget = 'umd'
  config.output.publicPath = 'http://localhost:3000/child-react18'
  return config
}
