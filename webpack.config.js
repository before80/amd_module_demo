const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd' // 设置库的目标类型为 UMD，以兼容 AMD、CommonJS 和全局变量
    },
    resolve: {
        extensions: ['.js','.jsx'],
        preferRelative: true, // 尝试相对路径解析
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: {
              loader: 'babel-loader', // 使用 babel-loader 处理 ES Modules
              options: {
                presets: ['@babel/preset-env'] // 使用 @babel/preset-env 转换 ES Modules 语法
              }
            },
            exclude: /node_modules/
        }]
    },
    devtool: process.env.NODE_ENV == 'production' ? false : 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // 指定静态文件目录
        },
        compress: false,
        host: 'localhost',
        port: 8089,
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['dist']
        }),
        new HtmlWebpackPlugin({
            template: './src/template/index.html'
        })
    ]
}