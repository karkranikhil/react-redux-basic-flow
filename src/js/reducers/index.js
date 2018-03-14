
import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
console.log('reducer called')
export default combineReducers({ articles: articleReducer });