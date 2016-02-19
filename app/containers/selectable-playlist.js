import { connect } from 'react-redux'
import { playTrack } from '../actions'
import Playlist from '../components/playlist'

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTrackClick: (id) => {
      dispatch(playTrack(id))
    }
  }
}

const SelectablePlayList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist)

export default SelectablePlayList
