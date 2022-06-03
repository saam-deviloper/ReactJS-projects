// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import combineReducer from './combinedReducer'
import logger from 'redux-logger'

const store = createStore(combineReducer, applyMiddleware(logger));
export default store;
