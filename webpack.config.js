// zhidinglujing 
const path = require("path")

// 通过url直接访问index.html
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
})
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports={
    mode: 'development',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'buildle.js'
    },
    module: {
        rules: [
            {test: /\.css$/, use:['style-loader', 'css-loader', 'postcss-loader']},
            {test: /\.less$/, use:['style-loader', 'css-loader', 'less-loader']},
            {test: /\.img|jpg|png|jpeg|bmp|ttf|svg|eot|woff|qodd2$/, use: 'url-loader?limit=78716'},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/},
            {test: /\.vue$/, use: ['vue-loader']}
        ]
    },
    plugins: [htmlPlugin, new VueLoaderPlugin()]
}