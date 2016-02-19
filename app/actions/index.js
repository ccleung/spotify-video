export const playTrack = (id) => {
  return {
    type: 'PLAY_TRACK',
    id
  }
}

export const initData = () => {
  return {
    type: 'INITIALIZE_DATA'
  }
}
