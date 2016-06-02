import { combineReducers } from 'redux'
import tracks from './playTrack'

const selectedTrackId = (state = '', action) => {
  switch(action.type) {
    case 'PLAY_TRACK':
      return action.id;
    default:
      return state;
  }
}

const fetchingTracks = (state = false, action) => {
  switch(action.type) {
    case 'FETCHING_TRACKS':
      return true;
    case 'RECEIVE_PLAYLIST':
      return false;
    default:
      return state;
  }
}

const spotifyVideoReducers = combineReducers({
  tracks,
  selectedTrackId,
  fetchingTracks
})

export default spotifyVideoReducers
