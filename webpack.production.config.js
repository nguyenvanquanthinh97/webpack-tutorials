const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.[contenthash].js',
		path: path.resolve(__dirname, './build'),
		publicPath: ''
	},
	mode: 'production',
	optimization: {
		splitChunks: {
			chunks: 'all',
			minSize: 7000
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
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: function() {
								return [ require('precss'), require('autoprefixer') ];
							}
						}
					},
					'sass-loader'
				]
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
			},
			{
				test: /\.ttf$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts'
						}
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles.[contenthash].css'
		}),
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [ '**/*', path.join(process.cwd(), 'build/**/*') ]
		}),
		new HtmlWebpackPlugin({
			title: 'Hello World',
			description: 'This is a app using webpack manually config',
			template: 'src/index.hbs',
			filename: 'index.html'
		})
	]
};
