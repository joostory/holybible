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
      template: path.join(__dirname, 'src', 'templates', 'index.html')
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          exclude: [
            path.resolve(__dirname, "node_modules"),
          ]
        }
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
              publicPath: path.join(__dirname, 'dist')
            }
          },
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 8000,
    static: {
      directory: path.join(__dirname, 'dist')
    }
  }

}

module.exports = (env, argv) => {
  return config
}
