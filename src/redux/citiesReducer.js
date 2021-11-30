const initialState = {
  cities: [],
  totalCount: null,
  cityAction: null,
  cityToEdit: null,
  citySuccess: false
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
    case "CITIES/SET_CITY_TO_EDIT": {
      return {
        ...state,
        cityToEdit: action.payload
      }
    }
    case "CITIES/SET_CITY_ACTION": {
      return {
        ...state,
        cityAction: action.payload
      }
    }
    case "CITIES/SET_CITY_SUCCESS": {
      return {
        ...state,
        citySuccess: action.payload
      }
    }
    default:
      return state;
  }
}

export default citiesReducer;