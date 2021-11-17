import {carsAPI} from "../api/restapi";
import {carsActions} from "./actions/carsActions";

const initialState = {
  cars: [],
  carToEdit: null,
  totalCount: null,
  categories: [],
  carAction: null
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
    default:
      return state;
  }
}

export const getCars = (page) => async (dispatch) => {
  const response = await carsAPI.getCars(page)
  if (!initialState.totalCount) {
    dispatch(carsActions.setTotalCarsCount(response.data.count))
  }
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
  dispatch(carsActions.setCarAction(action))
}

export default carsReducer;