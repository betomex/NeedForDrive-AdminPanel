const initialState = {
  adminCurrentPage: 1
};

const utilsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UTILS/SET_ADMIN_CURRENT_PAGE": {
      return {
        ...state,
        adminCurrentPage: action.payload
      }
    }
    default:
      return state;
  }
}

export default utilsReducer;