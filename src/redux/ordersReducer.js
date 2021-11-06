import {ordersAPI} from "../api/restapi";
import {ordersActions} from "./actions/ordersActions";

const initialState = {
  orders: [],
  totalCount: null
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ORDERS/SET_ORDERS_PORTION": {
      return {
        ...state,
        orders: action.payload
      }
    }
    case "ORDERS/ORDERS_TOTAL_COUNT": {
      return {
        ...state,
        totalCount: action.payload
      }
    }
    default:
      return state;
  }
}

export const getOrders = (page) => async (dispatch) => {
  const response = await ordersAPI.getOrders(page)
  if (!initialState.totalCount) {
    dispatch(ordersActions.setTotalOrdersCount(response.data.count))
  }
  dispatch(ordersActions.setOrdersPortion(response.data.data))
}

export default ordersReducer;