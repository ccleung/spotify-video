import { connect } from 'react-redux';
import { fetchVideoId, fetchPlaylist } from '../actions';
import Playlist from '../components/playlist';

// http://stackoverflow.com/questions/6271237/detecting-when-user-scrolls-to-bottom-of-div-with-jquery
const BUFFER_HEIGHT = 1;

const mapStateToProps = (state) => {
  return {
    tracks: state.tracks,
    selectedTrackId: state.selectedTrackId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTrackClick: (id, searchQuery) => {
      dispatch(fetchVideoId(id, searchQuery))
    },
    onPlaylistScroll: (event, dom) => {
      console.log(dom.scrollHeight);
      if(dom.scrollTop + dom.offsetHeight >= dom.scrollHeight - BUFFER_HEIGHT) {
        dispatch(fetchPlaylist());
      }
    } 
  }
}

const SelectablePlayList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist)

export default SelectablePlayList
