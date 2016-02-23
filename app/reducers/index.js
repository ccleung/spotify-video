import { combineReducers } from 'redux'
import tracks from './playTrack'
import data from './data'

// const displayTrack = (state = 'empty', action) => {
// 	switch(action.type) {
// 		case 'DISPLAY_TRACK':
// 			return state.tracks.select((element, index, array) => {
// 				return element.id == action.id;
// 			});
// 		default:
// 			return state;
// 	}
// }

const selectedaTrackId = (state = '', action) => {
	switch(action.type) {
		case 'PLAY_TRACK':
			return action.id;
		default:
			return state;
	}
}

const spotifyVideoReducers = combineReducers({
  data,
  tracks,
  // displayTrack,
  selectedaTrackId
})

export default spotifyVideoReducers
