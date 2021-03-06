import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from 'redux-thunk';
import authReducer from "./authReducer";
import ordersReducer from "./ordersReducer";
import carsReducer from "./carsReducer";
import citiesReducer from "./citiesReducer";
import pointsReducer from "./pointsReducer";
import utilsReducer from "./utilsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  orders: ordersReducer,
  cars: carsReducer,
  cities: citiesReducer,
  points: pointsReducer,
  utils: utilsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

export default store;