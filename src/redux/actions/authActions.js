export const authActions = {
  setAuthData: (data) => ({type: "AUTH/SET_AUTH_DATA", payload: data}),
  setAuthStatus: (status) => ({type: "AUTH/SET_AUTH_STATUS", payload: status})
}