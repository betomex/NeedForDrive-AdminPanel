import {carsAPI} from "../../api/restapi";

export const carsActions = {
  setCarsPortion: (data) => ({type: "CARS/SET_CARS_PORTION", payload: data}),
  setTotalCarsCount: (count) => ({type: "CARS/CARS_TOTAL_COUNT", payload: count}),
}

export const getCars = (page, limit, sorters = null) => async (dispatch) => {
  const response = await carsAPI.getCars(page, limit, sorters)
  dispatch(carsActions.setTotalCarsCount(response.data.count))
  dispatch(carsActions.setCarsPortion(response.data.data))
}