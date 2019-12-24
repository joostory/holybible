const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    'holybible': './src/index.js'
  },

  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: '[name].min.js'
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      template: "dist/index.html"
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
