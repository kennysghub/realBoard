const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [ '@babel/preset-env' ],
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]

    },
    devServer: {
        compress: true,
        port: 8080,
        hot: true,
    },
    plugins: [ new HtmlWebpackPlugin({
        template: 'index.html'

    }) ],
    resolve: {
        extensions: [ '.js', '.jsx' ],

    }
};