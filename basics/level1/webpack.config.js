const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

module.exports = {
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
