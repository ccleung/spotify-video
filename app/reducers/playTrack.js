const playTrack = (state = 'empty', action) => {
  switch(action.type) {
    case 'PLAY_TRACK':
      return action.id
    default:
      return state
  }
}

export default playTrack
