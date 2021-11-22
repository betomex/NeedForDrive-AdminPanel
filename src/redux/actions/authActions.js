import {authAPI} from "../../api/api";

export const authActions = {
  setAuthData: (data) => ({type: "AUTH/SET_AUTH_DATA", payload: data}),
  setAuthStatus: (status) => ({type: "AUTH/SET_AUTH_STATUS", payload: status})
}

export const postLogin = (login, password) => async (dispatch) => {
  try {
    const response = await authAPI.postLogin(login, password)
    sessionStorage.setItem("access_token", response.data.access_token)
    sessionStorage.setItem("refresh_token", response.data.refresh_token)
    dispatch(authActions.setAuthData(response.data))
  } catch (e) {
    dispatch(authActions.setAuthStatus(e.response.status))
  }
}
