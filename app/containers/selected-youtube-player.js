import { connect } from 'react-redux'
import YouTubePlayer from '../components/youtube-player'

// TODO: get by index and use normalze
const getVideoIdToPlay = (tracks, trackId) => {
	var selectedTrack = tracks.find((element, index, array) => {
		return element.id == trackId;
	})
	if (selectedTrack === undefined) {
		return '';
	}
	return selectedTrack.videoId;
}

const mapStateToProps = (state) => {
  return {
    playTrack: getVideoIdToPlay(state.tracks, state.selectedaTrackId)
  }
}

const SelectedYouTubePlayer = connect(mapStateToProps)(YouTubePlayer)

export default SelectedYouTubePlayer