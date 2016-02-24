import $ from 'jquery';

const apiKey = "AIzaSyB3iMwuO5nwMtwVU9pzrcIhWeY_c0XLPpg";

export const getYouTubeVideoID = (query) => {
  var params = {
    key: apiKey,
    type: 'video',
    part: 'id',
    maxResults: 1,
    q: query
  };

  return $.ajax({
    url: "https://www.googleapis.com/youtube/v3/search",
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
