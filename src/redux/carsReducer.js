import {carsAPI} from "../api/restapi";
import {carsActions} from "./actions/carsActions";

const initialState = {
  cars: [],
  carToEdit: null,
  currentPage: 1,
  totalCount: null,
  categories: [],
  carAction: null,
  carSuccess: false
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CARS/SET_CARS_PORTION": {
      return {
        ...state,
        cars: action.payload
      }
    }
    case "CARS/CARS_TOTAL_COUNT": {
      return {
        ...state,
        totalCount: action.payload
      }
    }
    case "CARS/SET_CAR_TO_EDIT": {
      return {
        ...state,
        carToEdit: action.payload
      }
    }
    case "CARS/SET_CATEGORIES": {
      return {
        ...state,
        categories: action.payload
      }
    }
    case "CARS/SET_CAR_ACTION": {
      return {
        ...state,
        carAction: action.payload
      }
    }
    case "CARS/SET_CAR_SUCCESS": {
      return {
        ...state,
        carSuccess: action.payload
      }
    }
    case "CARS/SET_CURRENT_PAGE": {
      return {
        ...state,
        currentPage: action.payload
      }
    }
    default:
      return state;
  }
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

export default carsReducer;