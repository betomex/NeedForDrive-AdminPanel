import {citiesAPI} from "../api/restapi";
import {citiesActions} from "./actions/citiesActions";

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

export const getCities = () => async (dispatch) => {
  const response = await citiesAPI.getCities()
  if (!initialState.totalCount) {
    dispatch(citiesActions.setTotalCitiesCount(response.data.count))
  }
  dispatch(citiesActions.setCitiesPortion(response.data.data))
}

export default citiesReducer;