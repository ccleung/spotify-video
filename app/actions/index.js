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
  return (dispatch, getState) => {
    let state = getState();
    // offset is always the total number of tracks we have currently
    // set offset to get new records
    var offset = state.tracks.result.tracks.length;
    return getPlaylist(offset).success((data) => {
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
