const path = require('path')

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      components: path.resolve(__dirname, 'src/components'),
      commons: path.resolve(__dirname, 'src/commons'),
      assets: path.resolve(__dirname, 'src/assets'),
      pages: path.resolve(__dirname, 'src/pages')
    }
  }

  return config
}
