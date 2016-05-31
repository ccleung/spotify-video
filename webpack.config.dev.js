var path = require('path');
var webpack = require('webpack');
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';


module.exports = {
    devtool: 'eval',
    // The configuration for the client
    // name: 'browser',
    entry: {
      app: ['./app/main.js', hotMiddlewareScript]
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'app.js',
      publicPath: '/dist/'
    },
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel', // 'babel-loader' is also a legal name to reference
          query: {
            presets: ['react', 'es2015']
          }
        },
        {
          test: /\.css$/,
          // only have localIdentName for our styles
          include: [path.join(__dirname, 'app/styles')],
          loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        },
        {
          test: /\.css$/,
          exclude: [path.join(__dirname, 'app/styles')],
          loader: 'style!css-loader'
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader'
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
};
