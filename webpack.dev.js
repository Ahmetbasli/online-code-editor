const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].js',
        chunkFilename: '[id].js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './dist')
        },
        compress: true,
        historyApiFallback: true,
        https: false,
        open: true,
        hot: true,
        port: 3000,
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true,
        },
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    "css-loader",
                    "sass-loader",
                ],
            },
        ]
    }
});