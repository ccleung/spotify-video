var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config.dev.js');
var app = express();
var compiler = webpack(config);

app.set('port', (process.env.PORT || 8888));

var isDev = process.env.NODE_ENV === 'development';
if (isDev) {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.use('/public', express.static('public'));

require('./config/routes')(app);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
