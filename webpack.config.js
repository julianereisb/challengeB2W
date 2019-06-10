const webpack = require('webpack')

module.exports = {
    mode: 'production',
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: 8080
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    module: {
        rules: [{
             test: /\.s?[ac]ss$/,
             use: [
                {
                    loader: 'style-loader'
                },
                {
                  loader: 'css-loader'
                }, {
                  loader: 'resolve-url-loader'
                }, {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true,
                    sourceMapContents: false
                  }
                }
              ]
        }, {
            test: /\.(png|svg|jpg|gif|woff|woff2|ttf|eot)$/,
            use: ['file-loader']
        }, {
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }]
    }
}