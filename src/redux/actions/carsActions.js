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

export const getCategories = () => async (dispatch) => {
  const data = await carsAPI.getCategories()
  dispatch(carsActions.setCategories(data))
}

export const setCarToEdit = (car) => async (dispatch) => {
  dispatch(carsActions.setCarToEdit(car))
}

export const setCarAction = (action) => async (dispatch) => {
  dispatch(carsActions.setCarSuccess(false))
  dispatch(carsActions.setCarAction(action))
}

export const putCar = (carId, data) => async (dispatch) => {
  const response = await carsAPI.putCar(carId, data)
  if (response.status === 200) {
    dispatch(carsActions.setCarSuccess(true))
  } else {
    dispatch(carsActions.setCarSuccess(false))
  }
}

export const postCar = (data) => async (dispatch) => {
  const response = await carsAPI.postCar(data)
  if (response.status === 200) {
    dispatch(carsActions.setCarSuccess(true))
  } else {
    dispatch(carsActions.setCarSuccess(false))
  }
}

export const deleteCar = (carId) => async () => {
  await carsAPI.deleteCar(carId)
}

export const setCurrentPage = (page) => async (dispatch) => {
  dispatch(carsActions.setCurrentPage(page))
}