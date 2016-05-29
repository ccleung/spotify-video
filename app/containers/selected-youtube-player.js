import { connect } from 'react-redux'
import YouTubePlayer from '../components/youtube-player'

const getVideoIdToPlay = (normalizedTracks, trackId) => {
  var selectedTrack = normalizedTracks.entities.tracks[trackId];
  if (selectedTrack === undefined) {
    return '';
  }
  return selectedTrack.videoId;
}

const mapStateToProps = (state) => {
  return {
    playTrack: getVideoIdToPlay(state.tracks, state.selectedTrackId)
  }
}

const SelectedYouTubePlayer = connect(mapStateToProps)(YouTubePlayer)

export default SelectedYouTubePlayer