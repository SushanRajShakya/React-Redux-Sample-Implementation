import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";
import visibilityFilterReducer from "./visibilityFilterReducer";

export default combineReducers({
  counter: counterReducer,
  todos: todoReducer,
  visibilityFilter: visibilityFilterReducer
})
