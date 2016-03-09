var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config.dev.js');
var app = express();
var compiler = webpack(config);
var path = require('path');
var querystring = require('querystring');
var request = require('request'); 
var spotifyConfig = require('./config/spotify-config.js')
var utils = require('./utils/utils.js')

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

app.get('/login', function(req, res) {
  // your application requests authorization
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: spotifyConfig.clientId,
      scope: spotifyConfig.scope,
      redirect_uri: spotifyConfig.redirectUri,
    }));
});

app.get('/callback', function(req, res) {

  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: spotifyConfig.redirectUri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(spotifyConfig.clientId + ':' + spotifyConfig.clientSecret).toString('base64'))
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {      if (!error && response.statusCode === 200) {

      var access_token = body.access_token,
          refresh_token = body.refresh_token;

      var options = {
        url: 'https://api.spotify.com/v1/me/tracks',
        headers: { 'Authorization': 'Bearer ' + access_token },
        json: true
      };

      // use the access token to access the Spotify Web API
      request.get(options, function(error, response, body) {          console.log(body);
      });

      // we can also pass the token to the browser to make requests from there
      res.redirect('/?' +
        querystring.stringify({
          access_token: access_token,
          refresh_token: refresh_token
        }));
    } else {
      res.redirect('/?' +
        querystring.stringify({
          error: 'invalid_token'
        }));
    }
  });
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// This is where the magic happens. We take the locals data we have already
// fetched and seed our stores with data.
// App is a function that requires store data and url to initialize and return the React-rendered html string
// app.get('*', function (req, res, next) {
//   App.default(req, res);
// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
