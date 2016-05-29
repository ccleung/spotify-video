import ResponseData from '../data/response-data'

const emptyTracks = {
  result: { tracks: [] },
  entities: { tracks: {} }
}

/*
track state is normalized with normalizr:
https://github.com/paularmstrong/normalizr
e.g.,

{
  result: {
    tracks: ['345RHjiEdIVedsxtiwGG7t', '2IjyFRCRn8x1bEquOM3vxg'...]
  }
  entities: {
    tracks: {
      '345RHjiEdIVedsxtiwGG7t': {
        name: '',
        artists: []
      },
      '2IjyFRCRn8x1bEquOM3vxg': {
        name: '',
        artists: []
      }
    }
  }
}
*/
const tracks = (state = emptyTracks, action) => {
  switch (action.type) {
    case 'RECEIVE_VIDEO_ID':
      // save the youtube videoId in the entity body of the corresponding trackId
      var normalizedTracks = Object.assign({}, state);
      normalizedTracks.entities.tracks[action.trackId].videoId = action.videoId;
      return normalizedTracks;
    case 'RECEIVE_PLAYLIST':
      return action.playlist;
    case 'LOGOUT':
      return emptyTracks;
    default:
      return state;
  }
}

export default tracks
