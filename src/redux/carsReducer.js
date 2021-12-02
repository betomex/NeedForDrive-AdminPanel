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

export default carsReducer;