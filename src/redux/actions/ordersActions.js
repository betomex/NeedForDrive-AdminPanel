import {ordersAPI} from "../../api/restapi";

export const ordersActions = {
  setOrdersPortion: (data) => ({type: "ORDERS/SET_ORDERS_PORTION", payload: data}),
  setTotalOrdersCount: (count) => ({type: "ORDERS/ORDERS_TOTAL_COUNT", payload: count}),
  getOrderStatus: (status) => ({type: "ORDERS/SET_ORDER_STATUS", payload: status}),
}

export const getOrders = (page = 1, limit = 20, filters = null) => async (dispatch) => {
  const response = await ordersAPI.getOrders(page, limit, filters)
  dispatch(ordersActions.setTotalOrdersCount(response.data.count))
  dispatch(ordersActions.setOrdersPortion(response.data.data))
}

export const getOrderStatus = () => async (dispatch) => {
  const data = await ordersAPI.getOrderStatus()
  dispatch(ordersActions.getOrderStatus(data))
}