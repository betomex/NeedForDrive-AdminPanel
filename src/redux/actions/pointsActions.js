export const pointsActions = {
  setPointsPortion: (data) => ({type: "POINTS/SET_POINTS_PORTION", payload: data}),
  setTotalPointsCount: (count) => ({type: "POINTS/POINTS_TOTAL_COUNT", payload: count}),
}