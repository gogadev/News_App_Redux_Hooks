import { combineReducers } from "redux";

import fetchTech from "./fetchTech";
import customSearch from "./customSearch";

const rootReducer = combineReducers({
  fetchTech: fetchTech,
  customSearch: customSearch,
});

export default rootReducer;
