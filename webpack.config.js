var webpack = require('webpack')
var path = require('path')

module.exports = {
	entry: {
		app: './src/app.js'
	},
	output: {
		filename: 'public/dist/bundle.js',     //filename: './public/dist/bundles.js', 
		sourceMapFilename: 'public/dist/bundle.app.js'      //sourceMapFilename: './public/dis/bundles.app.js'
	},
	devtool: '$source-map',
	module: {
		loaders: [
		    {
		    	loader: 'babel-loader',
		    	test: /\.js?$/,
		    	exclude: /(node_module)/,
		    	query: {
		    		presets: ['react', 'es2015']
		    	}
		    }
		]
	}
}