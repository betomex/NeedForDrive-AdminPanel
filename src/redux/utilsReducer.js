const initialState = {
  adminCurrentPage: 1,
  error: null
};

const utilsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UTILS/SET_ADMIN_CURRENT_PAGE": {
      return {
        ...state,
        adminCurrentPage: action.payload
      }
    }
    case "UTILS/SET_ERROR": {
      return {
        ...state,
        error: action.payload
      }
    }
    default:
      return state;
  }
}

export default utilsReducer;