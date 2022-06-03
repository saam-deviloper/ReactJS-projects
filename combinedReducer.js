import { combineReducers } from "redux";
import numberReducer from "./Number/numberReducer";
import counterReducer from "./Counter/counterReducer";

 const  combineReducer = combineReducers({
    number : numberReducer,
    counter: counterReducer
})
export default combineReducer;