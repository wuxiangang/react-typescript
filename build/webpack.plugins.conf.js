const webpack = require('webpack')
const path = require('path')
const WebpackBar = require('webpackbar')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const IncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('../config')
const utils = require('./utils')
const isProd = process.env.NODE_ENV === 'production'

const productionHtmlOption = isProd ? {
  filename: config.build.index,
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeAttributeQuotes: true
  },
  chunksSortMode: 'dependency'
} : {}
  
module.exports = [
  new WebpackBar({
    minimal: false,
    compiledIn: false
  }),
  new webpack.DllReferencePlugin({
    manifest: utils.resolve('dll/manifest.json'),
    context: __dirname
  }),
  new HtmlWebpackPlugin({
    files: utils.createExternals(),
    filename: config.build.index,
    template: 'index.ejs',
    inject: true,
    ...productionHtmlOption
  }),
  new IncludeAssetsPlugin({
    assets: [`${config.build.assetsSubDirectory}/js/vendor.dll.js`],
    append: false
  }),
  // copy custom static assets
  new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, '../static'),
      to: config.build.assetsSubDirectory,
      ignore: ['.*']
    }
  ]),
  new MiniCssExtractPlugin({
    filename: utils.assetsPath('css/[name].[chunkhash].css'),
    allChunks: true
  })
]