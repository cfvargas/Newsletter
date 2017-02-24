/* eslint-disable */
const path = require('path')
const SvgStore = require('webpack-svgstore-plugin')
const postCSSConfig = require('./postcss.config')
const spriteConfig = require('./spriteSVG.config')

module.exports = {
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.css'],
  },
  entry: './src/App.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: postCSSConfig,
            }
          }
        ]
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        use: 'file',
      },
    ]
  },

  plugins: [
    // create svgStore instance object
    new SvgStore(('./src/assets/svg'), spriteConfig)
  ]
}
