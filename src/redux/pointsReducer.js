const initialState = {
  points: [],
  totalCount: null,
  pointToEdit: null,
  pointAction: null,
  pointSuccess: false
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
    case "POINTS/SET_POINT_SUCCESS": {
      return {
        ...state,
        pointSuccess: action.payload
      }
    }
    default:
      return state;
  }
}

export default pointsReducer;