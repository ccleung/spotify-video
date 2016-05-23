var appConfig = require('./app-config');

module.exports = {
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri:  appConfig.baseUrl + '/users/callback',
  scope: 'user-library-read'
};
