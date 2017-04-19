let webpack = require('webpack')
let path = require('path')

module.exports = {
	entry:{
		app:'./src/app.js',
		vendor:['vue']
	},
	output:{
		path:path.resolve(__dirname,'build'),
		filename:'[name].js',
		publicPath:'./build'
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:'babel-loader'
			}
		]
	},
	resolve:{
		alias:{
			"vue$":"vue/dist/vue.common.js"
		}
	},
	plugins:[
		new webpack.optimize.CommonsChunkPlugin({
			names:['vendor']
		})
	]
}

if (process.env.NODE_ENV === 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			sourcemap:true,
			compress:{
				warnings:false
			}
		})
	)

	module.exports.plugins.push(
		new webpack.DefinePlugin({
			'process.env':{
				NODE_ENV:'production'
			}
		})
	)
}