import {citiesAPI} from "../../api/restapi";

export const citiesActions = {
  setCitiesPortion: (data) => ({type: "CITIES/SET_CITIES_PORTION", payload: data}),
  setTotalCitiesCount: (count) => ({type: "CITIES/CITIES_TOTAL_COUNT", payload: count}),
}

export const getCities = (sorters = null) => async (dispatch) => {
  const response = await citiesAPI.getCities(sorters)
  dispatch(citiesActions.setTotalCitiesCount(response.data.count))
  dispatch(citiesActions.setCitiesPortion(response.data.data))
}