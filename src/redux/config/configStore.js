import { createStore } from "redux";
import { combineReducers } from "redux";
import cards from "../modules/cards";

const rootReducer = combineReducers({
  cards,
});
const store = createStore(rootReducer);

export default store;
