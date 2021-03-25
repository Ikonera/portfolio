const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { DefinePlugin } = require("webpack")

const APP_NAME = "Gabriel MILLET"

module.exports = {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist",
		port: 3010,
		historyApiFallback: true,
	},
	entry: {
		index: {
			import: "./src/index.tsx",
		},
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: '/',
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		alias: {
			Components: path.resolve(__dirname, "src/Components"),
			Interfaces: path.resolve(__dirname, "src/Interfaces"),
			Assets: path.resolve(__dirname, "src/Assets"),
		}
	},
	module: {
		rules: [
			{
				test: /\.tsx?/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				loader: "file-loader",
			},
		],
	},
	plugins: [
		new DefinePlugin({
			__APPNAME__: APP_NAME
		}),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: APP_NAME,
			template: "./public/index.html",
		}),
	],
}
