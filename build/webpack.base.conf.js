const path = require('path')
const config = require('../config')
const utils = require('./utils')
const rules = require('./webpack.loaders.conf')
const plugins = require('./webpack.plugins.conf')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].js'),
    chunkFilename: utils.assetsPath('js/[id].js')
  },
  resolve: {
    alias: {
      '@': utils.resolve('src')
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json']
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
