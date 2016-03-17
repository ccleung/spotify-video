var querystring = require('querystring');
var request = require('request'); 
var spotifyConfig = require('../config/spotify-config')

exports.login = function(req, res) {
  // your application requests authorization
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: spotifyConfig.clientId,
      scope: spotifyConfig.scope,
      redirect_uri: spotifyConfig.redirectUri,
    })
  );
}

exports.auth = function(req, res) {
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

  // request for access token
  request.post(authOptions, function(error, response, body) { 
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      var refresh_token = body.refresh_token;

      // TODO: store refresh token on server side
      res.cookie('auth_token', access_token);
      res.redirect('/'
        // querystring.stringify({
        //   access_token: access_token,
        //   refresh_token: refresh_token
        // })
      );
    } else {
      res.redirect('/?' +
        querystring.stringify({
          error: 'invalid_token'
        })
      );
    }
  });
}
