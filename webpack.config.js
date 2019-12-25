const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    'holybible': './src/index.js'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].min.js'
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css',
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'templates', 'index.html'),
      filename: "index.html",
      hash: true
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: {
          test: path.resolve(__dirname, "node_modules"),
        },
      },
      {
        test: /\.(sc|c)ss/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 8000
  }

}

module.exports = (env, argv) => {
  return config
}
