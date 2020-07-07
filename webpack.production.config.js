const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'hello-world': './src/hello-world.js',
		kyou: './src/kyou.js'
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, './dist'),
		publicPath: ''
	},
	mode: 'production',
	optimization: {
		splitChunks: {
			chunks: 'all',
			minSize: 7000,
			automaticNameDelimiter: '_'
		}
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg)$/,
				use: [ 'file-loader' ]
			},
			{
				test: /\.css$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
			},
			{
				test: /\.(scss|sass)$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ],
						plugins: [ 'transform-class-properties' ]
					}
				}
			},
			{
				test: /\.hbs$/,
				use: [ 'handlebars-loader' ]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		}),
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [ '**/*', path.join(process.cwd(), 'build/**/*') ]
		}),
		new HtmlWebpackPlugin({
			title: 'Hello World',
			chunks: [ 'hello-world', 'vendors~hello-world~kyou' ],
			description: 'This is a app using webpack manually config',
			template: 'src/page-template.hbs',
			filename: 'hello-world.html'
		}),
		new HtmlWebpackPlugin({
			title: 'Kyou Suiri Image',
			chunks: [ 'kyou', 'vendors~hello-world~kyou' ],
			description: 'This is a app using webpack manually config',
			template: 'src/page-template.hbs',
			filename: 'kyou.html'
		})
	]
};
