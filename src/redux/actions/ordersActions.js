import {ordersAPI} from "../../api/restapi";
import {utilsActions} from "./utilsActions";

export const ordersActions = {
  setOrdersPortion: (data) => ({type: "ORDERS/SET_ORDERS_PORTION", payload: data}),
  setTotalOrdersCount: (count) => ({type: "ORDERS/ORDERS_TOTAL_COUNT", payload: count}),
  getOrderStatus: (status) => ({type: "ORDERS/SET_ORDER_STATUS", payload: status}),
}

export const getOrders = (page = 1, limit = 20, filters = null) => async (dispatch) => {
  try {
    const response = await ordersAPI.getOrders(page, limit, filters)
    dispatch(ordersActions.setTotalOrdersCount(response.data.count))
    dispatch(ordersActions.setOrdersPortion(response.data.data))
  } catch (e) {
    dispatch(utilsActions.setError(e.response))
  }
}

export const getOrderStatus = () => async (dispatch) => {
  try {
    const data = await ordersAPI.getOrderStatus()
    dispatch(ordersActions.getOrderStatus(data))
  } catch (e) {
    dispatch(utilsActions.setError(e.response))
  }
}