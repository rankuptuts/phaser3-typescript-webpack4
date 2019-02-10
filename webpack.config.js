const webpack = require('webpack')
	const HtmlWebpackPlugin = require('html-webpack-plugin')

	const path = require('path')

	module.exports = {
	mode: 'development',

	entry: {
		index: './src/index',
	},

	output: {
		filename: '[name].js',
		path: __dirname + '/dist'
	},

	devServer: {
		port: 8080
	},

	devtool: 'cheap-source-map',

	resolve: {
		extensions: ['.ts', '.js', '.json']
	},

	module: {
		rules: [{
				test: /\.ts$/,
				loader: 'ts-loader',
				include: path.resolve(__dirname, 'src')
			}
		]
	},

	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html')
		})
	]
}