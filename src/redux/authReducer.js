const initialState = {
  isAuth: false,
  authStatus: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH/SET_AUTH_DATA": {
      return {
        ...state,
        isAuth: true
      }
    }
    case "AUTH/SET_AUTH_STATUS": {
      return {
        ...state,
        authStatus: action.payload
      }
    }
    default:
      return state;
  }
}

export default authReducer;