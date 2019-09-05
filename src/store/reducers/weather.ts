interface Initial {
  results: [],
  city: string
}

const initialState: Initial = {
  results: [],
  city: ''
}

const weather = (state = initialState, action: any) => {
  let stateCopy = { ...state }
  if (typeof action.data === 'string') action.data = JSON.parse(action.data)
  switch (action.type) {
    case 'GET_WEATHER_SUCCESS':
      stateCopy.results = action.results
      break
    case 'GET_POSITION_SUCCESS':
      stateCopy.city = action.city
      break
    default:
      return state
  }
  return stateCopy
}

export default weather
