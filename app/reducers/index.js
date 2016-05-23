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

const spotifyVideoReducers = combineReducers({
  tracks,
  selectedTrackId
})

export default spotifyVideoReducers
