import Cookies from 'js-cookie'

var Auth = {
  loggedIn() {
    return !!Cookies.get('auth_token');
  },

  logout() {
    Cookies.remove('auth_token');
  },

  getToken() {
    return Cookies.get('auth_token');
  }
}

export default Auth;
