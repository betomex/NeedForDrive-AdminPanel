import {citiesAPI} from "../api/restapi";
import {citiesActions} from "./actions/citiesActions";

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

export const setCityToEdit = (city) => async (dispatch) => {
  dispatch(citiesActions.setCityToEdit(city))
}

export const setCityAction = (action) => async (dispatch) => {
  dispatch(citiesActions.setCitySuccess(false))
  dispatch(citiesActions.setCityAction(action))
}

export const putCity = (cityId, data) => async (dispatch) => {
  const response = await citiesAPI.putCity(cityId, data)
  if (response.status === 200) {
    dispatch(citiesActions.setCitySuccess(true))
  } else {
    dispatch(citiesActions.setCitySuccess(false))
  }
}

export const postCity = (data) => async (dispatch) => {
  const response = await citiesAPI.postCity(data)
  if (response.status === 200) {
    dispatch(citiesActions.setCitySuccess(true))
  } else {
    dispatch(citiesActions.setCitySuccess(false))
  }
}

export default citiesReducer;