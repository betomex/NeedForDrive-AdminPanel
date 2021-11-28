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

export default carsReducer;