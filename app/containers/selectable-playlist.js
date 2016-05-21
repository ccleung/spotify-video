import { connect } from 'react-redux'
import { fetchVideoId } from '../actions'
import Playlist from '../components/playlist'

const mapStateToProps = (state) => {
  return {
    tracks: state.tracks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTrackClick: (id, searchQuery) => {
      dispatch(fetchVideoId(id, searchQuery))
    }
  }
}

const SelectablePlayList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist)

export default SelectablePlayList
