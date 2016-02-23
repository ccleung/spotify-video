import ResponseData from '../data/response-data'

const initTracks = () => {
	var items = ResponseData.items;
	var tracks = items.map((item) => {
		return Object.assign({}, item.track, { videoId: null });
	});

	return tracks;
}

const generateVideoId = () => {
	return Math.floor((Math.random() * 2) + 1) % 2 == 0 ? 'Zaek8Va_hFA' : 'hLQl3WQQoQ0';
}

const track = (state, action) => {
  switch(action.type) {
    case 'PLAY_TRACK':
    	if (state.id !== action.id) {
    		return state;
    	}

      return Object.assign({}, state, {
      	videoId: state.videoId ? state.videoId : generateVideoId()
      })
    default:
      return state
  }
}

const tracks = (state = initTracks(), action) => {
	switch (action.type) {
		case 'PLAY_TRACK':
			return state.map((trackState) => {
				return track(trackState, action)
			})
		default:
			return state
	}
}

export default tracks
