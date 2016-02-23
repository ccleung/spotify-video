import { connect } from 'react-redux'
import { playTrack, displayTrack } from '../actions'
import Playlist from '../components/playlist'

const mapStateToProps = (state) => {
  return {
    tracks: state.tracks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTrackClick: (id) => {
      dispatch(playTrack(id))
      // dispatch(displayTrack(id))
    }
  }
}

const SelectablePlayList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist)

export default SelectablePlayList
