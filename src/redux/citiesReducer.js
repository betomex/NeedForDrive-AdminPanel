import {citiesAPI} from "../api/restapi";
import {citiesActions} from "./actions/citiesActions";

const initialState = {
  cities: [],
  totalCount: null,
  cityAction: null,
  cityToEdit: null
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

export const setCityToEdit = (city) => async (dispatch) => {
  dispatch(citiesActions.setCityToEdit(city))
}

export const setCityAction = (action) => async (dispatch) => {
  dispatch(citiesActions.setCityAction(action))
}

export default citiesReducer;