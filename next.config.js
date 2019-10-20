/* eslint-disable no-param-reassign */
const path = require('path');

module.exports = {
  webpack(config) {
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    config.resolve.alias['@store'] = path.join(__dirname, 'store');
    config.resolve.alias['@utils'] = path.join(__dirname, 'utils');
    config.resolve.alias['@theme'] = path.join(__dirname, 'theme');

    return config;
  },
};
