import { connect } from 'react-redux'
import YouTubePlayer from '../components/youtube-player'

const mapStateToProps = (state) => {
  return {
    playTrack: state.playTrack
  }
}

const SelectedYouTubePlayer = connect(mapStateToProps)(YouTubePlayer)

export default SelectedYouTubePlayer