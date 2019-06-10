const path = require('path');

module.exports = ({ config }) => {
  config.resolve.modules.push(path.resolve(__dirname, "../src"));
  delete config.resolve.alias['core-js'];
  return config;
};
