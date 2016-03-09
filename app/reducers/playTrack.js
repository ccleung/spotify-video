import ResponseData from '../data/response-data'

const initTracks = () => {
  var items = ResponseData.items;
  var tracks = items.map((item) => {
    return Object.assign({}, item.track, { videoId: null });
  });

  return tracks;
}

const track = (state, action) => {
  switch(action.type) {
    case 'RECEIVE_VIDEO_ID':
      if (state.id !== action.trackId) {
        return state;
      }

      return Object.assign({}, state, {
        videoId: action.videoId
      })
    default:
      return state;
  }
}

const tracks = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_VIDEO_ID':
      return state.map((trackState) => {
        return track(trackState, action);
      })
    case 'RECEIVE_PLAYLIST':
      return action.playlist;
    default:
      return state;
  }
}

export default tracks
