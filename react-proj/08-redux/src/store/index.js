// 여기서 여러개의 reducer(넘버를 reduce하는 reducer,,,등등)를 다 combine하는 파일임

import { combineReducers } from "redux";
import counterRedcuer from "./counterReducer";
import isDataReducer from "./isDataReducer";
import accountReducer from "./AccountReducer";

const rootReducer = combineReducers({
  counter: counterRedcuer,
  account: accountReducer,
  isData: isDataReducer,
});

export default rootReducer;
