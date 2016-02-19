import ResponseData from '../data/response-data'

const data = (state = ResponseData, action) => {
  switch(action.type) {
    case 'INITIALIZE_DATA':
      return ResponseData
    default:
      return state
  }
}

export default data
