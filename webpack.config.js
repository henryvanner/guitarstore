const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
	entry:{
		index:"./src/index.js"
	},
	output:{
		filename:"[name].bundle.js",
		path: path.resolve(__dirname,"dist"),
		publicPath:"/"
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: "src/index.html"
		}),
		new CleanWebpackPlugin(["dist"]),
		new webpack.optimize.SplitChunksPlugin()
	],
	module:{
		rules:[
			{test:/\.js$/,exclude:/node_modules/,loader:"babel-loader"},
			{test:/\.css$/,use:["style-loader","css-loader"]}
		]
	},
	mode:"development"
};