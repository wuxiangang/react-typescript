const path = require('path')
const config = require('../config')
const utils = require('./utils')
const rules = require('./webpack.loaders.conf')
const plugins = require('./webpack.plugins.conf')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath(process.env.NODE_ENV === 'production' ? 
    'js/[name].[chunkhash].js' : 'js/[name].js'
    ),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  resolve: {
    alias: {
      '@': utils.resolve('src')
    },
    extensions: ['.js', '.jsx', '.json', '.less', '.css']
  },
  externals: utils.createExternals().externals,
  module: {
    rules
  },
  performance: {
    hints: false
  },
  plugins
}
