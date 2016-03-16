/**
 * Routes for express app
 */
var path = require('path');
var users = require('../controllers/users');
var tracks = require('../controllers/tracks');
var express = require('express');
var userRouter = express.Router();
var apiRouter = express.Router();


module.exports = function(app) {
  userRouter.get('/login', function(req, res) {
    users.login(req, res);
  });

  userRouter.get('/callback', function(req, res) {
    users.auth(req, res);
  });

  apiRouter.get('/tracks', function(req, res) {
    tracks.all(req, res);
  });

  apiRouter.get('/tracks/video_id', function(req, res) {
    tracks.getVideoId(req, res);
  });

  // This is where the magic happens. We take the locals data we have already
  // fetched and seed our stores with data.
  // App is a function that requires store data and url to initialize and return the React-rendered html string
  // app.get('*', function (req, res, next) {
  //   App.default(req, res);
  // });

  app.use('/users', userRouter);
  app.use('/api', apiRouter);

  app.get('*', function(req, res) {
    // __dirname is the local to this directly
    res.sendFile(path.join(__dirname, '../../index.html'));
  });
}

