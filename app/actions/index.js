import { getYouTubeVideoID } from '../utils/web-api';

export const playTrack = (id) => {
  return {
    type: 'PLAY_TRACK',
    id
  }
}

// export const requestVideoId = (searchQuery) => {
//  return {
//    type: 'REQUEST_VIDEO_ID',
//    searchQuery
//  }
// }

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
    videoId: data.items[0].id.videoId,
    trackId: trackId
  }
}

