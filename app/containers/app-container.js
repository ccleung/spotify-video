import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { logout, fetchPlaylist } from '../actions'
import App from '../components/app'
import Auth from '../utils/auth'

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutClicked: () => {
      dispatch(logout());
      Auth.logout();
      browserHistory.push('/login')
    },
    onComponentDidMount: () => {
      dispatch(fetchPlaylist());
    }
  }
}

export default connect(null, mapDispatchToProps)(App)
