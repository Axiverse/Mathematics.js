var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname);
var APP_DIR = path.resolve(__dirname, 'source');

var config = {
	entry: APP_DIR + '/_.js',
	output: {
		path: BUILD_DIR,
		filename: 'Mathematics.js'
	},
	module : {
		loaders : [
			{
				test : /\.js?/,
				include : APP_DIR,
				loader : 'babel-loader',
		        query: {
		          presets: ['es2015']
		        }
			},
		]
	}, 
	externals: {

	}
};

module.exports = config;