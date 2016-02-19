import { combineReducers } from 'redux'
import playTrack from './playTrack'
import data from './data'

const spotifyVideoReducers = combineReducers({
  data,
  playTrack
})

export default spotifyVideoReducers