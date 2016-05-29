import { getYouTubeVideoID, getPlaylist } from '../utils/web-api';
import { normalize, arrayOf } from 'normalizr';
import { track } from '../normalizers/tracks';

export const playTrack = (id) => {
  return {
    type: 'PLAY_TRACK',
    id
  }
}

export const fetchPlaylist = () => {
  return (dispatch) => {
    return getPlaylist().success((data) => {
      var normalizedData = normalize(data, {
        tracks: arrayOf(track)
      });
      dispatch(receivedPlaylist(normalizedData))
    });
  }
}

export const receivedPlaylist = (normalizedData) => {
  return {
    type: 'RECEIVE_PLAYLIST',
    playlist: normalizedData
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
