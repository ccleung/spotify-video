import Auth from './auth'
import $ from 'jquery';

const BASE_URL = process.env.NODE_ENV === 'production' ? 'http://spotifyvideo.herokuapp.com' : 'http://localhost:8888'

export const getYouTubeVideoID = (query) => {
  var params = {
    track_name: query
  };

  return $.ajax({
    url: BASE_URL + "/api/tracks/video_id",
    data: params,
    dataType: 'json',
    success: (data) => {
      return data;
    },
    error: (xhr, status, err) => {
      console.error(status, err.toString());
    }
  });
}

export const getPlaylist = () => {
  var params = {
    limit: 20,
    access_token: Auth.getToken()
  }

  return $.ajax({
    url: BASE_URL + "/api/tracks",
    data: params,
    dataType: 'json',
    success: (data) => {
      return data;
    },
    error: (xhr, status, err) => {
      console.error(status, err.toString());
    }
  });
}
