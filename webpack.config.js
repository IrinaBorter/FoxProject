const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        vendor: 'angular',
        app: './src/app.js',
    },

    output: {
        path: path.join(__dirname, '/public/dist'),
        filename: '[name].bundle.js',
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: 'html',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
        ]
    },

    resolve: {
        extensions: ['', '.js', 'index.js'],
    },

    devtool: 'source-map',

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        port: 4000,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ],
};