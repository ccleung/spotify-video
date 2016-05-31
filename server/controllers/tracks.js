var request = require('request');
var spotifyConfig = require('../config/spotify-config');
var youtubeConfig = require('../config/youtube-config');

const parseTracks = (data) => {
  var items = data.items;
  var parsedTracks = items.map((item) => {
    return Object.assign({}, item.track, { videoId: null });
  });
  return { tracks: parsedTracks };
}

const parseYoutubeSearchResults = (data) => {
  return data.items[0].id.videoId;
}

exports.all = function(req, res) {
  var accessToken = req.query.access_token;
  var limit = req.query.limit || 20;
  var offset = req.query.offset || 0;

  if (!accessToken) {
    return res.status(401).json({error: 'Login required.'});
  }

  var options = {
    url: 'https://api.spotify.com/v1/me/tracks',
    headers: { 'Authorization': 'Bearer ' + accessToken },
    qs: { limit: limit, offset: offset },
    json: true
  };

  request.get(options, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var tracks = parseTracks(body);
      // debugging
      console.log("\n\n >>> tracks: ", tracks, '\n\n')
      return res.status(200).json(tracks);
    }

    return res.status(response.statusCode).json(body);
  });
};

exports.getVideoId = function(req, res) {
  var trackName = req.query.track_name;

  var queryParams = {
    key: youtubeConfig.apiKey,
    type: 'video',
    part: 'id',
    maxResults: 1,
    q: trackName
  }

  var options = {
    url: 'https://www.googleapis.com/youtube/v3/search',
    qs: queryParams,
    json: true
  };

  request.get(options, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var videoId = parseYoutubeSearchResults(body);
      // debug
      console.log("\n\n >>> getVideoId: ", videoId, "\n\n");
      return res.status(200).json({videoId: videoId});
    }
    return res.status(response.statusCode).json(body);
  });
};
