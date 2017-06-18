const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cssConfig = require('./config/webpack.css.config.js');

const paths = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

const commonConfig = {
    entry: {
        app: paths.app
    },
    output: {
        path: paths.build,
        filename: '[name].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'webpack level 1'
        })
    ]
};

const devServerConfig = {
    devServer: {
        inline: true,
        historyApiFallback: true
    }
};

module.exports = Object.assign({},
    commonConfig,
    //devServerConfig,
    cssConfig.loadCSS()
);
