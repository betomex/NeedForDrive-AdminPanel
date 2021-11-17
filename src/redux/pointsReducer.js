import {pointsAPI} from "../api/restapi";
import {pointsActions} from "./actions/pointsActions";

const initialState = {
  points: [],
  totalCount: null,
  pointToEdit: null,
  pointAction: null
};

const pointsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POINTS/SET_POINTS_PORTION": {
      return {
        ...state,
        points: action.payload
      }
    }
    case "POINTS/POINTS_TOTAL_COUNT": {
      return {
        ...state,
        totalCount: action.payload
      }
    }
    case "POINTS/SET_POINT_TO_EDIT": {
      return {
        ...state,
        pointToEdit: action.payload
      }
    }
    case "POINTS/SET_POINT_ACTION": {
      return {
        ...state,
        pointAction: action.payload
      }
    }
    default:
      return state;
  }
}

export const getPoints = () => async (dispatch) => {
  const response = await pointsAPI.getPoints()
  if (!initialState.totalCount) {
    dispatch(pointsActions.setTotalPointsCount(response.data.count))
  }
  dispatch(pointsActions.setPointsPortion(response.data.data))
}

export const setPointToEdit = (point) => async (dispatch) => {
  dispatch(pointsActions.setPointToEdit(point))
}

export const setPointAction = (action) => async (dispatch) => {
  dispatch(pointsActions.setPointAction(action))
}

export default pointsReducer;