var path = require('path');
var webpack = require("webpack");

module.exports = {
	entry: [
		"./js/holybible/index"
	],
	output: {
		path: path.join(__dirname, 'js'),
		filename: 'holybible.js'
	},
	plugins: process.env.NODE_ENV !== "production" ? [] : [
		new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true
      }
    }),
		new webpack.DefinePlugin({
		  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: [ 'babel-loader' ],
				exclude: /node_modules/,
				include: __dirname
			}
		]
	}

}
