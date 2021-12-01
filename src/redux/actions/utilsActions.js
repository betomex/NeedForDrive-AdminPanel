export const utilsActions = {
  setAdminCurrentPage: (page) => ({type: "UTILS/SET_ADMIN_CURRENT_PAGE", payload: page}),
}

export const setAdminCurrentPage = (page) => async (dispatch) => {
  dispatch(utilsActions.setAdminCurrentPage(page))
}
