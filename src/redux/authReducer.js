import {authAPI} from "../api/api";
import {authActions} from "./actions/authActions";

const initialState = {
  isAuth: false,
  accessToken: null,
  refreshToken: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH/SET_AUTH_DATA": {
      return {
        ...state,
        isAuth: true,
        accessToken: action.payload.access_token,
        refreshToken: action.payload.refresh_token
      }
    }
    default:
      return state;
  }
}

export const postLogin = (login, password) => async (dispatch) => {
  const data = await authAPI.postLogin(login, password)
  dispatch(authActions.setAuthData(data))
}

export default authReducer;