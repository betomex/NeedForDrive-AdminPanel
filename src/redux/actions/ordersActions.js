export const ordersActions = {
  setOrdersPortion: (data) => ({type: "ORDERS/SET_ORDERS_PORTION", payload: data}),
  setTotalOrdersCount: (count) => ({type: "ORDERS/ORDERS_TOTAL_COUNT", payload: count}),
}