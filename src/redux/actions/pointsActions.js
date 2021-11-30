import {pointsAPI} from "../../api/restapi";

export const pointsActions = {
  setPointsPortion: (data) => ({type: "POINTS/SET_POINTS_PORTION", payload: data}),
  setTotalPointsCount: (count) => ({type: "POINTS/POINTS_TOTAL_COUNT", payload: count}),
  setPointToEdit: (point) => ({type: "POINTS/SET_POINT_TO_EDIT", payload: point}),
  setPointAction: (action) => ({type: "POINTS/SET_POINT_ACTION", payload: action}),
  setPointSuccess: (status) => ({type: "POINTS/SET_POINT_SUCCESS", payload: status}),
}

export const getPoints = (sorters = null) => async (dispatch) => {
  const response = await pointsAPI.getPoints(sorters)
  dispatch(pointsActions.setTotalPointsCount(response.data.count))
  dispatch(pointsActions.setPointsPortion(response.data.data))
}