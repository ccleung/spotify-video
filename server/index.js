var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 8888));

var isDev = process.env.NODE_ENV === 'development';
if (isDev) {
  var webpack = require('webpack');
  var config = require('../webpack.config.dev.js');
  var compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.use('/dist', express.static(path.join(__dirname, '../dist')));

require('./config/routes')(app);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
