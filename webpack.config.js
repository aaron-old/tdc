let path    = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: "./js/app",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "js/dist")
    },
    module: {
        rules: [

            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
              test: /\.(png|jpg)$/,
              use: [
                  { loader: 'url-loader?limit=8192' }
              ]
            },
            {
                test: /\.jsx?$/,
                include: [
                  path.join(__dirname, 'js')
                ],
                use: [
                    { loader: 'react-hot-loader', },
                    { loader: 'babel-loader'}
                ]
            }
        ]
    },
    resolve: {
        // require files in app without specifying extensions
        extensions: ['.js', '.json', '.jsx', '.less'],
        alias: {
            // pretty useful to have a starting point in nested modules
            'appRoot': path.join(__dirname, 'js'),
            'vendor': 'appRoot/vendor'
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    devServer: {
        contentBase: path.join(__dirname, "js/dist"),
        compress: true,
        port: 8080
    }

};
