export const REQUEST_VIDEO = 'REQUEST_VIDEO_ID'
export const RECEIVE_VIDEO = 'RECEIVE_POSTS'
// export const SELECT_REDDIT = 'SELECT_REDDIT'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'

export const playTrack = (id) => {
  return {
    type: 'PLAY_TRACK',
    id
  }
}

export const initData = () => {
  return {
    type: 'INITIALIZE_DATA'
  }
}

// export const displayTrack = (id) => {
// 	return {
// 		type: 'DISPLAY_TRACK',
// 		id
// 	}
// }
