module.exports =  {
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: (process.env.NODE_ENV === 'production' ? 'http://spotifyvideo.herokuapp.com' : 'http://localhost:8888') + '/users/callback',
  scope: 'user-library-read'
};
