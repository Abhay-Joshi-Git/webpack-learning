module.exports = {
    loadCSS: () => ({
        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        }
    })
}
