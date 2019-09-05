const config = require('../config')
const utils = require('./utils')

module.exports = [
  ...(config.dev.useEslint ? [utils.createLintingRule()] : []),
  {
    test: /\.js$/,
    include: [utils.resolve('src'), utils.resolve('node_modules/webpack-dev-server/client')],
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true
      }
    }
  },
  {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    include: [utils.resolve('src')]
  },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: utils.assetsPath('img/[name].[hash:7].[ext]')
    }
  }
]