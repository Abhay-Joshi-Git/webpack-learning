const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cssConfig = require('./config/webpack.css.config.js');
const webpack = require('webpack');

const paths = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

const commonConfig = {
    entry: {
        app: paths.app,
        hmr: [
            // Include the client code. Note host/post.
            'webpack-dev-server/client?http://localhost:8080',

            // Hot reload only when compiled successfully
            'webpack/hot/only-dev-server',

            // Alternative with refresh on failure
            // 'webpack/hot/dev-server',
       ],
    },
    output: {
        path: paths.build,
        filename: '[name].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'webpack level 1'
        }),
        //new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
    // ,
    // devtool: "#inline-source-map"
};

const devServerConfig = {
    devServer: {
        inline: true,
        //historyApiFallback: true,
        publicPath: '/build/',
        contentBase: 'build',
        hot: true
    }
};

module.exports = Object.assign({},
    commonConfig,
    //devServerConfig,
    cssConfig.loadCSS()
);
