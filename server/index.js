var express = require('express');
var webpack = require('webpack');
var config = require('../webpack/webpack.config.dev.js');
var app = express();
var compiler = webpack(config);
var path = require('path');
// var App = require('../public/assets/app.js');

console.log(path.join(__dirname , '../public'))

app.set('port', (process.env.PORT || 8888));

app.use(express.static(path.join(__dirname , '../public')))

var isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

// This is where the magic happens. We take the locals data we have already
// fetched and seed our stores with data.
// App is a function that requires store data and url to initialize and return the React-rendered html string
// app.get('*', function (req, res, next) {
//   App.default(req, res);
// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
