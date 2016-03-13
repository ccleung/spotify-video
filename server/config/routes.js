/**
 * Routes for express app
 */
var path = require('path');
var users = require('../controllers/users')


module.exports = function(app) {
  app.get('/login', function(req, res) {
    users.login(req, res);
  });

  app.get('/callback', function(req, res) {
    users.auth(req, res);
  });

  // This is where the magic happens. We take the locals data we have already
  // fetched and seed our stores with data.
  // App is a function that requires store data and url to initialize and return the React-rendered html string
  // app.get('*', function (req, res, next) {
  //   App.default(req, res);
  // });

  app.get('*', function(req, res) {
    // __dirname is the local to this directly
    res.sendFile(path.join(__dirname, '../../index.html'));
  });
}

