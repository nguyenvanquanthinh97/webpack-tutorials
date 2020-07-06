const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist'),
		publicPath: ''
	},
	mode: 'development',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		index: 'index.html',
		port: 9000
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg)$/,
				use: [ 'file-loader' ]
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(scss|sass)$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
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
