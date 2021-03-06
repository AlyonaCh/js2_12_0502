let minCss = require ('mini-css-extract-plugin')
let HtmlWebpackPlugin = require ('html-webpack-plugin')
let VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    devServer: {
        port: 3000,
        hot: true,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: minCss.loader,
                        options: {
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'production',
                        },
                    },
                    'css-loader'
                ]
            },
        ]
    },
    plugins: [
        new minCss ({
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, 
        }),
        new HtmlWebpackPlugin({
            template: '../src/public/index.html'
          }),
          new VueLoaderPlugin()
    ]
}