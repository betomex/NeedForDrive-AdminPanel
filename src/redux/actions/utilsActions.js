export const utilsActions = {
  setAdminCurrentPage: (page) => ({type: "UTILS/SET_ADMIN_CURRENT_PAGE", payload: page}),
  setError: (error) => ({type: "UTILS/SET_ERROR", payload: error}),
}

export const setAdminCurrentPage = (page) => async (dispatch) => {
  dispatch(utilsActions.setAdminCurrentPage(page))
}
