// const { override } = require('customize-cra');
module.exports = function override(config, env) {
  config.output.library = 'microApp';
  config.output.libraryTarget = 'umd';
  config.output.publicPath = process.env.PUBLIC_URL;
  return config;
};
