const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module:{
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'},
                 //Converts JSX for browser and converts newer JS for older JS
            {test: /\.(css)$/, use: [ 'style-loader', 'css-loader' ]}
        ]
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyPlugin([{from : '_redirects'}]),
        new Dotenv()
    ]  ,
    devServer: {
        historyApiFallback: true
    } 
}