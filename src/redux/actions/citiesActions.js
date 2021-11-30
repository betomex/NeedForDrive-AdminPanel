import {citiesAPI} from "../../api/restapi";

export const citiesActions = {
  setCitiesPortion: (data) => ({type: "CITIES/SET_CITIES_PORTION", payload: data}),
  setTotalCitiesCount: (count) => ({type: "CITIES/CITIES_TOTAL_COUNT", payload: count}),
  setCityToEdit: (city) => ({type: "CITIES/SET_CITY_TO_EDIT", payload: city}),
  setCityAction: (action) => ({type: "CITIES/SET_CITY_ACTION", payload: action}),
  setCitySuccess: (status) => ({type: "CITIES/SET_CITY_SUCCESS", payload: status}),
}

export const getCities = (sorters = null) => async (dispatch) => {
  const response = await citiesAPI.getCities(sorters)
  dispatch(citiesActions.setTotalCitiesCount(response.data.count))
  dispatch(citiesActions.setCitiesPortion(response.data.data))
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