import {carsAPI} from "../../api/restapi";

export const carsActions = {
  setCarsPortion: (data) => ({type: "CARS/SET_CARS_PORTION", payload: data}),
  setTotalCarsCount: (count) => ({type: "CARS/CARS_TOTAL_COUNT", payload: count}),
  setCarToEdit: (car) => ({type: "CARS/SET_CAR_TO_EDIT", payload: car}),
  setCategories: (data) => ({type: "CARS/SET_CATEGORIES", payload: data}),
  setCarAction: (action) => ({type: "CARS/SET_CAR_ACTION", payload: action}),
  setCarSuccess: (status) => ({type: "CARS/SET_CAR_SUCCESS", payload: status}),
  setCurrentPage: (page) => ({type: "CARS/SET_CURRENT_PAGE", payload: page}),
}

export const getCars = (page, limit, sorters = null) => async (dispatch) => {
  const response = await carsAPI.getCars(page, limit, sorters)
  dispatch(carsActions.setTotalCarsCount(response.data.count))
  dispatch(carsActions.setCarsPortion(response.data.data))
}