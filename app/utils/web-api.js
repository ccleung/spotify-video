import { getParameterByName } from './utils'
import $ from 'jquery';

export const getYouTubeVideoID = (query) => {
  var params = {
    track_name: query
  };

  return $.ajax({
    url: "http://localhost:8888/tracks/video_id",
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
    access_token: getParameterByName('access_token')
  }

  return $.ajax({
    url: "http://localhost:8888/tracks",
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
