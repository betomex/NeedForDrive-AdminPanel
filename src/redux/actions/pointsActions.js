export const pointsActions = {
  setPointsPortion: (data) => ({type: "POINTS/SET_POINTS_PORTION", payload: data}),
  setTotalPointsCount: (count) => ({type: "POINTS/POINTS_TOTAL_COUNT", payload: count}),
  setPointToEdit: (point) => ({type: "POINTS/SET_POINT_TO_EDIT", payload: point}),
  setPointAction: (action) => ({type: "POINTS/SET_POINT_ACTION", payload: action}),
}