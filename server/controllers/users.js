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
  debugger;
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

      var options = {
        url: 'https://api.spotify.com/v1/me/tracks',
        headers: { 'Authorization': 'Bearer ' + access_token },
        json: true
      };

      // use the access token to access the Spotify Web API
      request.get(options, function(error, response, body) {
        console.log(body);
      });

      // we can also pass the token to the browser to make requests from there
      res.redirect('/?' +
        querystring.stringify({
          access_token: access_token,
          refresh_token: refresh_token
        })
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
