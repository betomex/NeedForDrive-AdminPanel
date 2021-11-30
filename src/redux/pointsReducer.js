const initialState = {
  points: [],
  totalCount: null,
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
    default:
      return state;
  }
}

export default pointsReducer;