const initialState = {
  cities: [],
  totalCount: null,
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CITIES/SET_CITIES_PORTION": {
      return {
        ...state,
        cities: action.payload
      }
    }
    case "CITIES/CITIES_TOTAL_COUNT": {
      return {
        ...state,
        totalCount: action.payload
      }
    }
    default:
      return state;
  }
}

export default citiesReducer;