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
