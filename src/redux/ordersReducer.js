const initialState = {
  orders: [],
  totalCount: null,
  orderStatus: [],
  cities: []
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
    case "ORDERS/SET_ORDER_STATUS": {
      return {
        ...state,
        orderStatus: action.payload
      }
    }
    case "ORDERS/SET_CITIES": {
      return {
        ...state,
        cities: action.payload
      }
    }
    default:
      return state;
  }
}

export default ordersReducer;