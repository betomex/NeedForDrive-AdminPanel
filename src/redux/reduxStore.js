import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from 'redux-thunk';
import authReducer from "./authReducer";
import ordersReducer from "./ordersReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  orders: ordersReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

export default store;