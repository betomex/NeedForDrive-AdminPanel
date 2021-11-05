import {authAPI} from "../api/api";
import {authActions} from "./actions/authActions";

const initialState = {
  isAuth: false,
  authStatus: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH/SET_AUTH_DATA": {
      localStorage.setItem("access_token", action.payload.access_token)
      localStorage.setItem("refresh_token", action.payload.refresh_token)

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

export const postLogin = (login, password) => async (dispatch) => {
  const response = await authAPI.postLogin(login, password)
  if (response.status === 200) {
    dispatch(authActions.setAuthData(response.data))
  } else {
    dispatch(authActions.setAuthStatus(response.status))
  }
}

export default authReducer;