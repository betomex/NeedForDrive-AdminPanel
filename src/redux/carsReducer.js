import {carsAPI} from "../api/restapi";
import {carsActions} from "./actions/carsActions";

const initialState = {
  cars: [],
  totalCount: null,
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

export default carsReducer;