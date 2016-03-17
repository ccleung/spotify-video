import { getYouTubeVideoID, getPlaylist } from '../utils/web-api';

export const playTrack = (id) => {
  return {
    type: 'PLAY_TRACK',
    id
  }
}

export const fetchPlaylist = () => {
  return (dispatch) => {
    return getPlaylist()
      .then((data) => dispatch(receivedPlaylist(data)))
  }
}

const parsePlaylist = (data) => {
  var items = data.items;
  var tracks = items.map((item) => {
    return Object.assign({}, item.track, { videoId: null });
  });
  return tracks;
}

export const receivedPlaylist = (data) => {
  return {
    type: 'RECEIVE_PLAYLIST',
    playlist: data
  }
}

export const fetchVideoId = (trackId, searchQuery) => {
  return (dispatch) => {
    dispatch(playTrack(trackId));
    return getYouTubeVideoID(searchQuery)
      .then((data) => dispatch(receivedVideoId(trackId, data)))
  }
}

export const receivedVideoId = (trackId, data) => {
  return {
    type: 'RECEIVE_VIDEO_ID',
    videoId: data.videoId,
    trackId: trackId
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}
